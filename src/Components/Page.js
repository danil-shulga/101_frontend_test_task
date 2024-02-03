import { useState } from 'react';
import { useQuery } from '@apollo/client';
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PROVIDERS_QUERY } from '../Queries/providersQuery';
import { TARIFFS_QUERY } from '../Queries/tariffsQuery';

import { tariffsPriceDetails } from '../utils/tariffsDetails/tariffsPriceDetails';
import { tariffsInternetDetails } from '../utils/tariffsDetails/tariffsInternetDetails';
import { tariffsTV_Details } from '../utils/tariffsDetails/tariffsTV_Details';
import { tariffsTV_HD_Details } from '../utils/tariffsDetails/tariffsTV_HD_Details';
import { sortTariffsData } from '../utils/sort/sortTariffsData';
import { sortByValue } from '../utils/sort/sortByValue/sortByValue';
import { toggleValue } from '../utils/toggleValue';
import BestTariffs from './BestTariffs';

const REGION_URL = 'moskva';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menuPaper: {
    maxHeight: 500,
  },
}));


function Page() {
  const classes = useStyles();

  const [currentProvider, setCurrentProvider] = useState({});
  const [sortValue, setSortValue] = useState('');

  const providers = useQuery(PROVIDERS_QUERY, {
    variables: {
      filter: `region.url=${REGION_URL}`,
      limit: 50,
      offset: 0,
      sort: 'name',
    },
  });
  const providersData = providers?.data?.providers?.data || [];

  const tariffs = useQuery(TARIFFS_QUERY, {
    skip: !currentProvider?.id,
    variables: {
      filter: `region.url=${REGION_URL}&provider.url_name=${currentProvider.url_name}`,
      limit: 100,
      offset: 0,
      sort: 'name',
    },
  });
  const tariffsData = tariffs?.data?.tariffs?.data || [];
  const sortedTariffsData = sortTariffsData(tariffsData);

  const handleChange = (event) => {
    const foundProvider = providersData.find(
      (x) => x.id === +event.target.value
    );
    if (foundProvider) {
      setCurrentProvider(foundProvider);
    }
  };

  const sortedByValue = sortByValue(sortedTariffsData, sortValue);

  const { paintLowerPrice } = tariffsPriceDetails(tariffsData);
  const { paintHighestSpeed } = tariffsInternetDetails(tariffsData);
  const { paintHighestTV_Channels } = tariffsTV_Details(tariffsData);
  const { paintHighestTV_HD_Channels, tariffsWithHighestTV_HD_Channels } =
    tariffsTV_HD_Details(tariffsData);

  return (
    <Container>
      <Typography variant="h3" component="h2">
        Таблица сравнения
      </Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="provider-select-label">Провайдер</InputLabel>
        <Select
          labelId="provider-select-label"
          id="provider-select"
          value={currentProvider?.id || 0}
          onChange={handleChange}
          label="Provider"
          MenuProps={{ classes: { paper: classes.menuPaper } }}>
          <MenuItem value="0">
            <em>None</em>
          </MenuItem>
          {providersData
            .filter((x) => x.info.cnt_tariffs > 0)
            .map((provider) => (
              <MenuItem key={provider.id} value={provider.id}>
                {provider.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{ cursor: 'pointer' }}
                onClick={() => setSortValue('')}>
                Название тарифа &#8634;
              </TableCell>
              <TableCell
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  setSortValue((current) =>
                    toggleValue(current, 'priceUp', 'priceDown')
                  )
                }>
                Цена &#10606;
              </TableCell>
              <TableCell
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  setSortValue((current) =>
                    toggleValue(current, 'internetSpeedDown', 'internetSpeedUp')
                  )
                }>
                Интернет &#10606;
              </TableCell>
              <TableCell
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  setSortValue((current) =>
                    toggleValue(current, 'tvChannelsDown', 'tvChannelsUp')
                  )
                }>
                TV &#10606;
              </TableCell>
              <TableCell
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  if (tariffsWithHighestTV_HD_Channels.length > 0) {
                    // проверка что у провайдера есть HD-TV, если нет то сортировка не выполняется
                    setSortValue((current) =>
                      toggleValue(
                        current,
                        'tvChannels_hdDown',
                        'tvChannels_hdUp'
                      )
                    );
                  }
                }}>
                TV HD &#10606;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedByValue.map((tariff) => (
              <TableRow key={tariff.id}>
                <TableCell component="th" scope="row">
                  {tariff.name}
                </TableCell>
                <TableCell
                  style={paintLowerPrice(tariff.displayPrice)}
                  component="th"
                  scope="row">
                  {tariff.displayPrice}
                </TableCell>
                <TableCell
                  style={paintHighestSpeed(tariff.internet.speed_in)}
                  component="th"
                  scope="row">
                  {tariff.internet.speed_in}
                </TableCell>
                <TableCell
                  style={paintHighestTV_Channels(tariff?.tv?.channels)}
                  component="th"
                  scope="row">
                  {tariff?.tv?.channels ? tariff.tv.channels : '-'}
                </TableCell>
                <TableCell
                  style={paintHighestTV_HD_Channels(tariff?.tv?.channels_hd)}
                  component="th"
                  scope="row">
                  {tariff?.tv?.channels_hd ? tariff.tv.channels_hd : '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* таблица лучших тарифов */}
      {currentProvider?.id && <BestTariffs tariffsData={tariffsData} />}
    </Container>
  );
}

export default Page;
