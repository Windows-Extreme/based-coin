import React, { useEffect, useCallback, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Typography } from '@mui/material';
import axios from 'axios';
import PageLayout from '../components/page-layout';
import MarketTable from '../components/market-table';



export default function HomePage(props) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userWatchList, setUserWatchList] = useState(null);
  
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
    getUserWatchList();
  }, [getUserWatchList]);


  return (
    isAuthenticated && (
    <PageLayout>
      <Typography variant='h5' gutterBottom>Watchlist</Typography>
      <MarketTable data={userWatchList} handleBookmark={props.handleBookmark} userData={props.userData}  />
      
    </PageLayout>
    )
  )
}