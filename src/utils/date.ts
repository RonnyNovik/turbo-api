import { DateTime, Settings } from 'luxon';

Settings.defaultZoneName = 'Asia/Jerusalem';

export const formatDateFromISO = (isoDate) => {
  return DateTime.fromJSDate(isoDate).toFormat('dd/MM/yyyy');
};

export const formatHourFromISO = (isoDate) => {
  return DateTime.fromJSDate(isoDate).toFormat('HH:mm');
};

export const formatDateAndHourFromISO = (isoDate: Date): string => {
  return `${formatDateFromISO(isoDate)} בשעה ${formatHourFromISO(isoDate)}`;
};
