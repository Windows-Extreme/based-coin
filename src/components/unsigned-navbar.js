import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { SignupButton } from './navbuttons/signup-button'
import { LoginButton } from './navbuttons/login-button';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box'

export const UnsignedNavbar = () => {

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