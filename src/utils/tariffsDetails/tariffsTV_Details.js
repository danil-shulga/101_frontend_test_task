import { findHighestValue } from '../findValue/findHighestValue';
import { getCellColor } from '../getCellColor';

export const tariffsTV_Details = (tariffsData) => {
  const TV_ChannelsArr = tariffsData.map((tariffData) => {
    return tariffData?.tv?.channels;
  });

  const highestTV_Channels = findHighestValue(TV_ChannelsArr);
  const tariffsWithHighestTV_Channels = tariffsData.filter((tariff) =>
    highestTV_Channels !== 0
      ? tariff?.tv?.channels === highestTV_Channels
      : false
  );

  const paintHighestTV_Channels = (tariffTV_Channels) =>
    getCellColor(
      tariffsWithHighestTV_Channels,
      tariffTV_Channels,
      highestTV_Channels
    );

  return {
    TV_ChannelsArr,
    highestTV_Channels,
    tariffsWithHighestTV_Channels,
    paintHighestTV_Channels,
  };
};
