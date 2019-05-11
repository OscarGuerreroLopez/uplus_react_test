// eslint-disable-next-line import/prefer-default-export
export const compare_duration_asc = (a, b) => {
  if (b.termInMonths < a.termInMonths) {
    return -1;
  }
  if (b.termInMonths > a.termInMonths) {
    return 1;
  }
  return 0;
};
