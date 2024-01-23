export const getCellColor = (bestTariffsByValueArr, currentTariff, bestValue) => {
  if (bestTariffsByValueArr.length === 0) {
    return {};
  } else if (bestTariffsByValueArr.length === 1) {
    return currentTariff === bestValue
      ? { background: 'LightGreen' }
      : {};
  } else {
    return currentTariff === bestValue
      ? { background: 'lightblue' }
      : {};
  }
}