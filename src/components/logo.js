import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function Logo() {
  return (
    <Button margin={0} padding={0}>
      <img src="/logo.svg" alt="logo" height={40}/>
    </Button>
  )
}