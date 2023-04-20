export const createInspectionByDateQuery = (
  startDate: string,
  endDate: string,
) => {
  const $gte = new Date(startDate);
  const $lte = new Date(endDate);

  return {
    date_created: {
      $gte,
      $lte,
    },
  };
};

export const createfindBySearchQuery = (searchQuery) => {
  const $or = [
    'inspectionNumber',
    'customerName',
    'customerPhone',
    'carNumber',
    'tester.name',
  ].map((key) => {
    return {
      [key]: {
        $regex: `.*${searchQuery}*`,
        options: 'i',
      },
    };
  });
  return { $or };
};
