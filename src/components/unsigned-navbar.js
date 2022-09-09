import React from 'react';
import { Link } from 'react-router-dom';
import {
  Toolbar, 
  Button, 
  Typography, 
  Box,
  Tooltip,
  IconButton
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import SignupButton from './navbuttons/signup-button'
import LoginButton from './navbuttons/login-button';

export default function UnsignedNavbar() {
  return (
    <Toolbar>
      <Button
        color='inherit'
        component={Link}
        to='/'
      >
      <img src="/logo.svg" alt="logo" height={40}/>
      <Typography variant='h6' ml={2}>Coin Fellows</Typography>
      </Button>
      <Box ml={'auto'}>
        <Tooltip title='Meet the Fellows'>
          <IconButton
            color='inherit'
            component={Link}
            to='/about'>
            <InfoIcon/>
          </IconButton>
        </Tooltip>
        <LoginButton />
        <SignupButton />
      </Box>
    </Toolbar>
  )
}