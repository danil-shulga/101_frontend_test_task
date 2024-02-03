import { sortByPrice } from "./sortByPrice";
import { sortByInternetSpeed } from "./sortByInternetSpeed"
import { sortByTV_Channels } from "./sortByTV_Channels";
import { sortByTV_Channels_hd } from "./sortByTV_Channels_hd";

export const sortByValue = (arr, value) => {
  switch (value) {
    // сортировка по цене
    case 'priceUp': {
      return [...arr].sort((a, b) => sortByPrice(a, b));
    }
    case 'priceDown': {
      return [...arr].sort((a, b) => sortByPrice(b, a));
    }

    // сортировка по скорости интернета
    case 'internetSpeedUp': {
      return [...arr].sort((a, b) => sortByInternetSpeed(a, b));
    }
    case 'internetSpeedDown': {
      return [...arr].sort((a, b) => sortByInternetSpeed(b, a));
    }

    // сортировка по кол-ву tv-каналов
    case 'tvChannelsUp': {
      return [...arr].sort((a, b) => sortByTV_Channels(a, b));
    }
    case 'tvChannelsDown': {
      return [...arr].sort((a, b) => sortByTV_Channels(b, a));
    }

    // сортировка по кол-ву tv_hd-каналов
    case 'tvChannels_hdUp': {
      return [...arr].sort((a, b) => sortByTV_Channels_hd(a, b));
    }
    case 'tvChannels_hdDown': {
      return [...arr].sort((a, b) => sortByTV_Channels_hd(b, a));
    }
    
    default: {
      return arr;
    }
  }
};