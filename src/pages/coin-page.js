// import React, { useEffect, useCallback, useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import { PageLayout } from '../components/page-layout';
// import axios from 'axios';
import NewChart from '../components/coin-chart';

import { Box, Typography } from '@mui/material';
import React from 'react';


export const CoinPage = () => {
  // const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  // const [marketList, setMarketList] = useState(null);
  
  // const getMarketList = useCallback(async () => {
  //   try {
  //     const accessToken = await getAccessTokenSilently();
  //     let response = await axios.get(`${process.env.REACT_APP_AUTH0_SERVER_URL}/market`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });
  //     const responseData = response.data;
  //     setMarketList(responseData);
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }, [getAccessTokenSilently])

  // // Run these whenever the page mounts

  // useEffect(() => {
  //   getMarketList();
  // }, [getMarketList])
  return (
    // isAuthenticated && 
    
    <PageLayout>
      <NewChart/>
      <Box mt={4}>
        <Typography variant='h3' gutterBottom>
          Your treasure matters
        </Typography>
        <Typography variant='h5' gutterBottom>
          this is the coin page
        
        </Typography>
      </Box>
    </PageLayout>
  )
}

