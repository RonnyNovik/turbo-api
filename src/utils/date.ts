export const formatDateAndHourFromISODate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = date.getUTCFullYear().toString();

  const formattedDate = `${day}/${month}/${year} בשעה ${hours}:${minutes}`;
  return formattedDate;
};

export const formatDateFromISODate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = date.getUTCFullYear().toString();

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};

export const formatHourFromISODate = (isoDate) => {
  const date = new Date(isoDate);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};
