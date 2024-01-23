export const sortByPriceUp = (a, b) => {
  return a.displayPrice >= b.displayPrice ? 1 : -1;
}