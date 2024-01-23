export const sortByTV_Channels_hdDown = (a, b) => {
  if (typeof a?.tv?.channels === 'undefined') {
    return 1;
  }
  if (typeof b?.tv?.channels === 'undefined') {
    return -1;
  }
  return a?.tv?.channels_hd <= b?.tv?.channels_hd ? 1 : -1;
}