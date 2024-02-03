export const sortByPrice = (a, b) => {
  return a.displayPrice >= b.displayPrice ? 1 : -1;
};
