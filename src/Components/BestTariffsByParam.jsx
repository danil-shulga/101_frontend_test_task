import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@material-ui/core';
import React from 'react';

function BestTariffsByParam(props) {
  const { title, bestTariffsArr } = props;
  return (
    <>
      <Typography style={{marginTop: '30px'}} variant="h5" component="h2">
        {title}
      </Typography>
      <TableContainer style={{marginTop: '15px'}} component={Paper}>
        <Table>
          <TableBody>
            {bestTariffsArr.map((tariff) => (
              <TableRow key={tariff.id}>
                <TableCell>{tariff.name}</TableCell>
                <TableCell>{tariff.displayPrice}</TableCell>
                <TableCell>{tariff.internet.speed_in}</TableCell>
                <TableCell>
                  {tariff?.tv?.channels ? tariff.tv.channels : '-'}
                </TableCell>
                <TableCell>
                  {tariff?.tv?.channels_hd ? tariff.tv.channels_hd : '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default BestTariffsByParam;
