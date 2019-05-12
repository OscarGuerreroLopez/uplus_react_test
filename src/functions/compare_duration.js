// eslint-disable-next-line import/prefer-default-export
export const sort_duration_asc = (a, b) => {
  if (b.termInMonths < a.termInMonths) {
    return -1;
  }
  if (b.termInMonths > a.termInMonths) {
    return 1;
  }
  return 0;
};

export const sort_rating_asc = (a, b) => {
  if (a.rating < b.rating) {
    return -1;
  }
  if (a.rating > b.rating) {
    return 1;
  }
  return 0;
};

export const sort_amount_asc = (a, b) => {
  if (b.amount < a.amount) {
    return -1;
  }
  if (b.amount > a.amount) {
    return 1;
  }
  return 0;
};

export const sort_date_asc = (a, b) => {
  if (a.deadline < b.deadline) {
    return -1;
  }
  if (a.deadline > b.deadline) {
    return 1;
  }
  return 0;
};
