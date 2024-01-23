import { findLowerValue } from '../findValue/findLowerValue';
import { getCellColor } from '../getCellColor';

export const tariffsPriceDetails = (tariffsData) => {
  const priceArr = tariffsData.map((tariffData) => {
    return tariffData.displayPrice;
  });

  const lowerPrice = findLowerValue(priceArr);
  const tariffsWithLowerPice = tariffsData.filter(
    (tariff) => tariff.displayPrice === lowerPrice
  );

  const paintLowerPrice = (tariffPrice) =>
    getCellColor(tariffsWithLowerPice, tariffPrice, lowerPrice);

  return { priceArr, lowerPrice, tariffsWithLowerPice, paintLowerPrice };
};
