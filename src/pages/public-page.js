import { Box, Typography } from '@mui/material';
import React from 'react';
import { UnsignedLayout } from '../components/unsigned-layout';



export const PublicPage = () => {
  return (
    <UnsignedLayout>
      <Box mt={4} align = "center">
        <Typography variant='h3' gutterBottom align = "center">
          Your treasure matters
        </Typography>
        <Typography variant='h5' gutterBottom align = "center">
          Use Coin Fellows to track your cryptocurrency and keep your eyes on the market. Sign up for free today. 
        </Typography>
      </Box>
      <Box mt={4} align = "center">   
      <Box component='img' src="img/coins-image.jpg" alt="BigCo Inc. logo"  sx={{width: '100%', height: 400, objectFit: 'cover', opacity:'0.7'}} mt={2} mb={4}/>   
        <Typography variant='h5' gutterBottom align = "center" maxWidth={500}>
        Coin Fellows gives users the ability to see a personalized watchlist of cryptocurrencies and view up-to-date data from the crypto market.
        </Typography>
        <Typography variant='h5' align = "center" gutterBottom maxWidth={500}>
        Real-time price data of over 12,000+ coins from the worlds largest independent data aggregator.
        </Typography>        
      </Box>
    </UnsignedLayout>
  )
}