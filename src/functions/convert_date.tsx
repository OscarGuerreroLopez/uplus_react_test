export const ConvertDate = (date: string) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);

  return day + "/" + month + "/" + year;
};

export const ConvertDateHours = (date: string) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
  const hour = date.substring(11, 16);

  return day + "/" + month + "/" + year + " " + hour;
};
