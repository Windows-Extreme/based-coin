import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { SignupButton } from './navbuttons/signup-button'
import { LoginButton } from './navbuttons/login-button';
import { LogoutButton } from './navbuttons/logout-button';

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
        </>
      )}
    </Toolbar>
  )
}