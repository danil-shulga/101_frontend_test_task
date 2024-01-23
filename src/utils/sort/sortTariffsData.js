export const sortTariffsData = (tariffsData) => {
  const sortedTariffsData = [];
  let counter = 0;

  tariffsData.forEach((tariff) => {
    if (tariff?.displayPrice) {
      if (tariff?.internet?.speed_in) {
        if (tariff?.tv) {
          sortedTariffsData.splice(counter, 0, tariff);
          counter++;
        } else {
          sortedTariffsData.push(tariff);
        }
      } else {
        sortedTariffsData.push(tariff);
      }
    } else {
      sortedTariffsData.push(tariff);
    }
  });

  return sortedTariffsData
}