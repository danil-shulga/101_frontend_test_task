import { sortByInternetSpeedDown } from "./byInternetSpeed/sortByInternetSpeedDown";
import { sortByInternetSpeedUp } from "./byInternetSpeed/sortByInternetSpeedUp";
import { sortByPriceDown } from "./byPrice/sortByPriceDown";
import { sortByPriceUp } from "./byPrice/sortByPriceUp";
import { sortByTV_ChannelsDown } from "./byTV_Channels/sortByTV_ChannelsDown";
import { sortByTV_ChannelsUp } from "./byTV_Channels/sortByTV_ChannelsUp";
import { sortByTV_Channels_hdDown } from "./byTV_Channels_hd/sortByTV_Channels_hdDown";
import { sortByTV_Channels_hdUp } from "./byTV_Channels_hd/sortByTV_Channels_hdUp";

export const sortByValue = (arr, value) => {
  switch (value) {
    // сортировка по цене
    case 'priceUp': {
      return [...arr].sort((a, b) => sortByPriceUp(a, b));
    }
    case 'priceDown': {
      return [...arr].sort((a, b) => sortByPriceDown(a, b));
    }

    // сортировка по скорости интернета
    case 'internetSpeedUp': {
      return [...arr].sort((a, b) => sortByInternetSpeedUp(a, b));
    }
    case 'internetSpeedDown': {
      return [...arr].sort((a, b) => sortByInternetSpeedDown(a, b));
    }

    // сортировка по кол-ву tv-каналов
    case 'tvChannelsUp': {
      return [...arr].sort((a, b) => sortByTV_ChannelsUp(a, b));
    }
    case 'tvChannelsDown': {
      return [...arr].sort((a, b) => sortByTV_ChannelsDown(a, b));
    }

    // сортировка по кол-ву tv_hd-каналов
    case 'tvChannels_hdUp': {
      return [...arr].sort((a, b) => sortByTV_Channels_hdUp(a, b));
    }
    case 'tvChannels_hdDown': {
      return [...arr].sort((a, b) => sortByTV_Channels_hdDown(a, b));
    }
    
    default: {
      return arr;
    }
  }
};