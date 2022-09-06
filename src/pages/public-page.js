import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { UnsignedLayout } from '../components/unsigned-layout';

export const PublicPage = () => {
  return (
    <UnsignedLayout>
      <Box mt={4}>
        <Typography variant='h3' gutterBottom>
          Your treasure matters
        </Typography>
        <Typography variant='h5' gutterBottom>
          Use Coin Fellows to track your cryptocurrency and keep your eyes on the market. Sign up for free today.
        </Typography>
      </Box>
    </UnsignedLayout>
  )
}