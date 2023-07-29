import handlebars from 'handlebars';
import puppeteer from 'puppeteer';
import { Readable } from 'stream';

import { RejectOption, RejectPDFResult } from 'src/consts/reject.const';

import { analyticsTemplate } from 'src/templates';
import { inspectionTemplate } from 'src/templates';

import {
  formatDateAndHourFromISO,
  formatDateFromISO,
  formatHourFromISO,
} from './date';
import { formatParenthesesInCarSystem } from './textFormatting';

const createPrioritizedRejectsForPdf = (system: RejectOption) => {
  const map = {
    'ש:': [],
    'נ:': [],
    'ג:': [],
  };

  for (const reject of system.results) {
    if (reject.priority) map[reject.priority].push(reject.name);
  }

  return {
    ...(map['ש:'].length && { lowPriorityRejects: map['ש:'].join(', ') }),
    ...(map['נ:'].length && { midPriorityRejects: map['נ:'].join(', ') }),
    ...(map['ג:'].length && { highPriorityRejects: map['ג:'].join(', ') }),
  };
};

const formatSystemForPdfTemplate = (system: RejectOption, index: number) => {
  let formattedSystem = {
    name: formatParenthesesInCarSystem(system.name),
    position: index + 1,
    hasPriorities: system.hasPriorities,
  } as RejectPDFResult;

  if (system.hasPriorities) {
    const prioritizedRejects = createPrioritizedRejectsForPdf(system);
    const passed = !Object.values(prioritizedRejects).length;
    formattedSystem = {
      ...formattedSystem,
      ...prioritizedRejects,
      passed,
    };

    return formattedSystem;
  }

  formattedSystem.results = system.results
    .map((reject) => reject.name)
    .join(',');

  return formattedSystem;
};

const parseInspectionForPdfTemplate = (inspection, settings) => {
  const date_created = formatDateAndHourFromISO(inspection.date_created);
  const postInspectionText = settings.postInspectionText;
  const signatureTermsText = settings.signatureTermsText
    .replace(
      '{{בוחן}}',
      `${inspection.tester.name} (${inspection.tester.code})`,
    )
    .replace('{{תאריך}}', date_created);

  const results = inspection.results.map(
    (system: RejectOption, index: number) => {
      return formatSystemForPdfTemplate(system, index);
    },
  );

  const tester = `${inspection.tester.name} בודק רכב בעל מספר תעודה ${inspection.tester.code}`;

  return {
    ...inspection._doc,
    date_created,
    postInspectionText,
    signatureTermsText,
    results,
    tester,
  };
};

const compilePdfFromTemplate = async (template: string, data) => {
  const pdfTemplate = await handlebars.compile(template);
  return await pdfTemplate(data, { allowProtoPropertiesByDefault: true });
};

const createPdfFileStream = async (html: string) => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-sandbox',
    ],
  });
  const page = await browser.newPage();
  const stream = new Readable();

  const options = {
    width: '210mm',
    height: '297mm',
    printBackground: true,
    margin: {
      top: '10px',
      right: '10px',
      bottom: '10px',
      left: '10px',
    },
  };

  await page.setContent(html);

  const pdfBuffer = await page.pdf(options);
  const bufferLength = pdfBuffer.length;

  await browser.close();

  stream.push(pdfBuffer);
  stream.push(null);

  return { stream, bufferLength };
};

export const createPdfStreamFromInspection = async (inspection, settings) => {
  const parsedInspection = parseInspectionForPdfTemplate(inspection, settings);

  const inspectionHTMLFile = await compilePdfFromTemplate(
    inspectionTemplate,
    parsedInspection,
  );

  const pdfStream = await createPdfFileStream(inspectionHTMLFile);
  return pdfStream;
};

const parseInspectionAnalyticsForPdfTemplate = (inspections) => {
  return inspections.map(
    ({ inspectionNumber, tester, carNumber, customerName, date_created }) => ({
      inspectionNumber,
      tester: `${tester.name} (${tester.code})`,
      carNumber,
      customerName,
      date_created: formatDateFromISO(date_created),
      hour: formatHourFromISO(date_created),
    }),
  );
};

export const createPdfStreamFromInspectionAnalytics = async (
  inspections,
  startDate,
  endDate,
) => {
  const parsedAnalytics = {
    startDate: formatDateFromISO(startDate),
    endDate: formatDateFromISO(endDate),
    inspections: parseInspectionAnalyticsForPdfTemplate(inspections),
  };

  const inspectionHTMLFile = await compilePdfFromTemplate(
    analyticsTemplate,
    parsedAnalytics,
  );

  const pdfStream = await createPdfFileStream(inspectionHTMLFile);
  return pdfStream;
};
