import { findHighestValue } from '../findValue/findHighestValue';
import { getCellColor } from '../getCellColor';

export const tariffsTV_HD_Details = (tariffsData) => {
  const TV_HD_ChannelsArr = tariffsData.map((tariffData) => {
    return tariffData?.tv?.channels_hd;
  });

  const highestTV_HD_Channels = findHighestValue(TV_HD_ChannelsArr);
  const tariffsWithHighestTV_HD_Channels = tariffsData.filter((tariff) => {
    return highestTV_HD_Channels !== 0
      ? tariff?.tv?.channels_hd === highestTV_HD_Channels
      : false;
  });

  const paintHighestTV_HD_Channels = (tariffTV_Channels) =>
    getCellColor(
      tariffsWithHighestTV_HD_Channels,
      tariffTV_Channels,
      highestTV_HD_Channels
    );
    
  return {
    TV_HD_ChannelsArr,
    highestTV_HD_Channels,
    tariffsWithHighestTV_HD_Channels,
    paintHighestTV_HD_Channels,
  };
};
