import React, { useEffect, useCallback, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { PageLayout } from '../components/page-layout';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


export const HomePage = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userWatchList, setUserWatchList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const initUser = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      await axios.get(`${process.env.REACT_APP_AUTH0_SERVER_URL}/user`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  const getUserWatchList = useCallback(async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      let response = await axios.get(`${process.env.REACT_APP_AUTH0_SERVER_URL}/watchlist`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      const responseData = response.data;
      setUserWatchList(responseData)
    } catch (error) {
      console.error(error.message)
    }
    
  }, [getAccessTokenSilently])

  useEffect(() => {
    initUser();
  })
  useEffect(() => {
    getUserWatchList();
  }, [getUserWatchList]);
  console.log(userWatchList)  

  function createData(name, Price, Changed, Market, watch) {
    return { name, Price, Changed, Market, watch };
  }
  const rows = [
    createData('Cardano', 0.49, -6.90808, 15707243651, 4.0),
    createData('XRP', 0.323091, -2.80692, 37, 4.3),
    createData('Terra-Luna', 0.000380, -5.89, 24, 6.0),
    createData('Ethereum', 1566.3, -3.14415, 188840022196, 4.3),
    createData('Solana', 30.93, -3.55184, 10835105918, 3.9),
  ];

  return (
    isAuthenticated && (
    <PageLayout>
      <div>Hello world!</div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Coin</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">% Changed</TableCell>
            <TableCell align="right">Market</TableCell>
            <TableCell align="right">Watch</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Price}</TableCell>
              <TableCell align="right">{row.Changed}</TableCell>
              <TableCell align="right">{row.Market}</TableCell>
              <TableCell align="right">{row.Watch}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </PageLayout>
    )
  )
}