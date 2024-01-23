export const sortByPriceDown = (a, b) => {
  return a.displayPrice <= b.displayPrice ? 1 : -1;
}