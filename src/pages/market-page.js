import React, { useEffect, useCallback, useState } from 'react';
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
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


  export const MarketPage = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [marketList, setMarketList] = useState(null);
  const [userWatchList, setUserWatchList] = useState(null);

  const getUserWatchList = useCallback(async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      let response = await fetch(`${process.env.REACT_APP_AUTH0_SERVER_URL}/user`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      response = await response.json();
      setUserWatchList(response)
    } catch (error) {
      console.error(error.message)
    }
    
  }, [getAccessTokenSilently])
  const getMarketList = useCallback(async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      let response = await fetch(`${process.env.REACT_APP_AUTH0_SERVER_URL}/market`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      response = await response.json();
      setMarketList(response);
    } catch (error) {
      console.error(error.message)
    }
  }, [getAccessTokenSilently])

  // Run these whenever the page mounts
  useEffect(() => {
    getUserWatchList();
  }, [getUserWatchList]);

  useEffect(() => {
    getMarketList();
  }, [getMarketList])
  
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
            <TableCell>Name</TableCell>
            <TableCell align="right">Price (USD)</TableCell>
            <TableCell align="right">Change (24h)</TableCell>
            <TableCell align="right">Market Cap</TableCell>
            <TableCell align="right">Watch</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {marketList?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box display={'flex'} alignItems='center'>
                  <Box mr={2}>
                  <img src={row.image} alt={row.id} height={30} />
                  </Box>
                  <Box>
                  <Typography variant='h6'>{row.name}</Typography>
                  <Typography variant='subtitle2' textTransform='uppercase'>{row.symbol}</Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="right">${row.current_price}</TableCell>
              <TableCell align="right">{row.percentage_change_24h}%</TableCell>
              <TableCell align="right">${row.marketCap}</TableCell>
              <TableCell align="right">
                <IconButton>
                  {row.isFavorited ? (<BookmarkIcon />) : (<BookmarkBorderIcon />)}
                  
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </PageLayout>

    )
  )
}