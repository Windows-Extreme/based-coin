import React from 'react';
import { Link } from 'react-router-dom';
import {
  Toolbar, 
  Button, 
  Typography, 
  Box,
} from '@mui/material';
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
        <LoginButton />
        <SignupButton />
        <Button
          color='inherit'
          component={Link}
          to='/about'
          >Meet the Fellows</Button>
      </Box>
    </Toolbar>
  )
}