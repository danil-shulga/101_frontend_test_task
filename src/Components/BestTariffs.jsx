import { Typography } from '@material-ui/core';
import React from 'react';
import BestTariffsByParam from './BestTariffsByParam';
import { tariffsPriceDetails } from '../utils/tariffsDetails/tariffsPriceDetails';
import { tariffsInternetDetails } from '../utils/tariffsDetails/tariffsInternetDetails';
import { tariffsTV_Details } from '../utils/tariffsDetails/tariffsTV_Details';
import { tariffsTV_HD_Details } from '../utils/tariffsDetails/tariffsTV_HD_Details';

function BestTariffs(props) {
  const { tariffsData } = props;

  const { tariffsWithLowerPice } = tariffsPriceDetails(tariffsData);
  const { tariffsWithHighestSpeed } = tariffsInternetDetails(tariffsData);
  const { tariffsWithHighestTV_Channels } = tariffsTV_Details(tariffsData);
  const { tariffsWithHighestTV_HD_Channels } =
    tariffsTV_HD_Details(tariffsData);

  return (
    <>
      <Typography variant="h4" component="h2">
        Лучшие в своем роде
      </Typography>

      {tariffsWithLowerPice.length > 0 && (
        <BestTariffsByParam
          title="Лучшая цена"
          bestTariffsArr={tariffsWithLowerPice}
        />
      )}

      {tariffsWithHighestSpeed.length > 0 && (
        <BestTariffsByParam
          title="Лучшая скорость интернета"
          bestTariffsArr={tariffsWithHighestSpeed}
        />
      )}

      {tariffsWithHighestTV_Channels.length > 0 && (
        <BestTariffsByParam
          title="Больше всех TV каналов"
          bestTariffsArr={tariffsWithHighestTV_Channels}
        />
      )}

      {tariffsWithHighestTV_HD_Channels.length > 0 && (
        <BestTariffsByParam
          title="Больше всех TV HD каналов"
          bestTariffsArr={tariffsWithHighestTV_HD_Channels}
        />
      )}
    </>
  );
}

export default BestTariffs;
