import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { PageLayout } from '../components/page-layout';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


  export const MarketPage = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userWatchList, setUserWatchList] = useState(null);

  useEffect(() => {
    const getUserWatchList = async () => {
      const domain = process.env.REACT_APP_AUTH0_SERVER_URL;

      try {
        const accessToken = await getAccessTokenSilently();

        // Maybe refactor this later using Axios?
        const response = await fetch(
          `${domain}/protected`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

        const user_metadata = await response;

        setUserWatchList(user_metadata);

      } catch (e) {
        console.error(e.message);
      }
    };

    getUserWatchList();

  }, [getAccessTokenSilently, user?.sub]);
  function createData(
    name,Price,Changed,Cap,Favorites,
   ) {
    return { name, Price, Changed, Cap, Favorites };
  }

  const rows = [
    createData('BitCoin', 18957.31, -4.00448, 362981396554, 4.0),
    createData('Ethereum', 1580.99, -1.46, 190234975399, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('DogeCoin', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  console.log(userWatchList)
  return (

    isAuthenticated && (    
    <PageLayout>
        <div>Hello world!</div>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
    </Box>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Coins</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">% Changed</TableCell>
            <TableCell align="right">Market Cap</TableCell>
            <TableCell align="right">Favorites</TableCell>
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
              <TableCell align="right">{row.Cap}</TableCell>
              <TableCell align="right">{row.Favorites}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </PageLayout>

    )
  )
}
