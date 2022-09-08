import React, { useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import { PageLayout } from '../components/page-layout';
import axios from 'axios';
import { CoinTable } from '../components/coin-table';
import {NewChart} from '../components/coin-chart';
import { Box, Typography } from '@mui/material';


export const CoinPage = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [coinData, setCoinData] = useState(null);
  const params = useParams();


  const getCoinData = useCallback(async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      let response = await axios.get(`${process.env.REACT_APP_AUTH0_SERVER_URL}/coins/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      const responseData = response.data;
      setCoinData(responseData)
    } catch (error) {
      console.error(error.message)
    }
  }, [getAccessTokenSilently, params.id])

  useEffect(() => {
    getCoinData();
  }, [getCoinData]);

  return (
    <PageLayout>
    {isAuthenticated && coinData && (
      <>
        <Box width={600}>
          <NewChart title={coinData?.name} data={coinData?.chart}/>
        </Box>
        <CoinTable />
        <Box mt={4}>
          <Typography variant='h3' gutterBottom>
            Your treasure matters
          </Typography>
          <Typography variant='h5' gutterBottom>
            this is the coin page
          </Typography>
        </Box>
      </>
    )}
    </PageLayout>
  )
}

