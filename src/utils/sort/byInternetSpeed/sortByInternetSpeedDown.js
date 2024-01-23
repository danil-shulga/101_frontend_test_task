export const sortByInternetSpeedDown = (a, b) => {
  return a.internet.speed_in <= b.internet.speed_in ? 1 : -1;
}