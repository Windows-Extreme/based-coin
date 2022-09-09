import React, { useEffect, useCallback, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import {
  Typography,
  Box, 
  TextField,
} from '@mui/material';
import debounce from "lodash/debounce"
import MarketTable from '../components/market-table';
import PageLayout from '../components/page-layout';

export default function MarketPage(props) {
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
      setMarketList(responseData);
    } catch (error) {
      console.error(error.message)
    }
  }, [getAccessTokenSilently])

  useEffect(() => {
    getMarketList();
  }, [getMarketList])

  const handleSearch = async (e) => {
    try {
      const params = {
        search: e.target.value
      }
      if (e.target.value === '') {
        getMarketList();
      } else {
        const response = await axios.get(`${process.env.REACT_APP_AUTH0_SERVER_URL}/search`, {params})
        setMarketList(response.data)
      }
    } catch (error) {
      console.error(error.message)
    }
  }


  

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
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={debounce(handleSearch, 500)}/>
    </Box>
     <MarketTable data={marketList} handleBookmark={props.handleBookmark} userData={props.userData}/>
    </PageLayout>


    )
  )
}
