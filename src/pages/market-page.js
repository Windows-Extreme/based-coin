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
import axios from 'axios';
import numeral from 'numeral'


  export const MarketPage = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [marketList, setMarketList] = useState(null);
  const [userData, setUserData] = useState(null);
  
  const getUserData = useCallback(async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      let response = await axios.get(`${process.env.REACT_APP_AUTH0_SERVER_URL}/user`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      const responseData = response.data;
      console.log(responseData)
      setUserData(responseData);
    } catch (error) {
      console.error(error.message)
    }
  }, [getAccessTokenSilently])
  
  const getMarketList = useCallback(async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      let response = await axios.get(`${process.env.REACT_APP_AUTH0_SERVER_URL}/market`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      const responseData = response.data;
      console.log(responseData)
      setMarketList(responseData);
    } catch (error) {
      console.error(error.message)
    }
  }, [getAccessTokenSilently])

  // Run these whenever the page mounts
  useEffect(() => {
    getUserData();
  }, [getUserData])

  useEffect(() => {
    getMarketList();
  }, [getMarketList])

  const handleBookmark = async (id) => {
    try {
      const accessToken = await getAccessTokenSilently();
      if (userData.watchlist.some(coin => coin._id === id)) {
        await axios.delete(`${process.env.REACT_APP_AUTH0_SERVER_URL}/user`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            data: {
              coinId: id
            }
          });
      } else {
        await axios.post(`${process.env.REACT_APP_AUTH0_SERVER_URL}/user`,
        {
          coinId: id
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      }
      getUserData();
    } catch (error) {
      console.error('Error in handleBookmark:', error)
    }
    console.log(id)
  }

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
            <TableCell>
              <Typography>
                Name
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>
                Price (USD)
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>
                Change (24h)
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>
                Market Cap
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>
                Watch
              </Typography>
            </TableCell>
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
              <TableCell align="right">
                <Typography>
                  {numeral(row.current_price).format('$0.00')}
                </Typography>
                </TableCell>
              <TableCell align="right">
                <Typography>
                  {numeral(row.percentage_change_24h / 100).format('0.00%')}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography textTransform='uppercase'>
                  {numeral(row.marketCap).format('$0.00a')}
                </Typography>
                </TableCell>
              <TableCell align="right">
                {/* Bookmark icon button */}
                <IconButton onClick={() => handleBookmark(row.id)}>
                  {userData?.watchlist.some(coin => coin._id === row.id) ? (<BookmarkIcon />) : (<BookmarkBorderIcon />)}
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
