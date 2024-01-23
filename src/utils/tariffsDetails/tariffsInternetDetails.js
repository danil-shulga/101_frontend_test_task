import { findHighestValue } from '../findValue/findHighestValue';
import { getCellColor } from '../getCellColor';

export const tariffsInternetDetails = (tariffsData) => {
  const internetSpeedArr = tariffsData.map((tariffData) => {
    return tariffData.internet.speed_in;
  });

  const highestSpeed = findHighestValue(internetSpeedArr);
  const tariffsWithHighestSpeed = tariffsData.filter(
    (tariff) => tariff.internet.speed_in === highestSpeed
  );

  const paintHighestSpeed = (tariffInternetSpeed) =>
    getCellColor(tariffsWithHighestSpeed, tariffInternetSpeed, highestSpeed);

  return {
    internetSpeedArr,
    highestSpeed,
    tariffsWithHighestSpeed,
    paintHighestSpeed,
  };
};
