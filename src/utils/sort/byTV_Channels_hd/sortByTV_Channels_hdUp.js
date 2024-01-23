export const sortByTV_Channels_hdUp = (a, b) => {
  if (typeof a?.tv?.channels === 'undefined') {
    return -1;
  }
  if (typeof b?.tv?.channels === 'undefined') {
    return 1;
  }
  return a?.tv?.channels >= b?.tv?.channels ? 1 : -1;
}