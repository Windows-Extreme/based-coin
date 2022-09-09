import React, { useEffect, useCallback, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import {
  Typography,
  Box, 
  TextField,
  Skeleton,
} from '@mui/material';
import debounce from "lodash/debounce"
import MarketTable from '../components/market-table';
import PageLayout from '../components/page-layout';

export default function MarketPage(props) {
  const { isAuthenticated } = useAuth0();
  const [marketList, setMarketList] = useState(null);

  
  const getMarketList = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_AUTH0_SERVER_URL}/market`);
      const responseData = response.data;
      setMarketList(responseData);
    } catch (error) {
      console.error(error.message)
    }
  }, [])

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


  if (!marketList) {
    return (
      <PageLayout>
        <Typography variant='h5' gutterBottom>Market</Typography>
        <Box
        sx={{
          '& > :not(style)': { mb: 1, width: '25ch' },
        }}>
        <TextField 
          id="outlined-basic" 
          label="Search" 
          variant="outlined" />
      </Box>
      <MarketTable loading={true}/>
      </PageLayout>
    )
  }

  return (
    isAuthenticated && (    
    <PageLayout>
      <Typography variant='h5' gutterBottom>Market</Typography>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { mb: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
        <TextField 
          id="outlined-basic" 
          label="Search" 
          variant="outlined" 
          onChange={debounce(handleSearch, 500)}/>
      </Box>
     <MarketTable loading={false} data={marketList} handleBookmark={props.handleBookmark} userData={props.userData}/>
    </PageLayout>


    )
  )
}
