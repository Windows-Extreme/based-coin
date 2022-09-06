import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { SignupButton } from './navbuttons/signup-button'
import { LoginButton } from './navbuttons/login-button';
import { LogoutButton } from './navbuttons/logout-button';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'

export const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Toolbar>
      {!isAuthenticated && (
        <>
        <SignupButton />
        <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
        <LogoutButton />
        <Button color='inherit'
        component={Link}
        to='/home'
        >Home</Button>
        </>
      )}
      <Button
        color='inherit'
        component={Link}
        to='/about'
        >About Us</Button>
    </Toolbar>
  )
}