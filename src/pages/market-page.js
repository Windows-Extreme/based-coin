import React, { useEffect, useCallback, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { PageLayout } from '../components/page-layout';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import axios from 'axios';
import { MarketTable } from '../components/market-table';



  export const MarketPage = (props) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [marketList, setMarketList] = useState(null);
  
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

  useEffect(() => {
    getMarketList();
  }, [getMarketList])

  

  return (

    isAuthenticated && (    
    <PageLayout>
      <Typography variant='h5' gutterBottom>Market</Typography>
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
     <MarketTable data={marketList} handleBookmark={props.handleBookmark} userData={props.userData}/>
    </PageLayout>

    )
  )
}
