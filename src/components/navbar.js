import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { SignupButton } from './navbuttons/signup-button'
import { LoginButton } from './navbuttons/login-button';
import { LogoutButton } from './navbuttons/logout-button';
import { NavLink } from 'react-router-dom';

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
        <NavLink
        to='/home'
        end
        >Home</NavLink>
        </>
      )}
      <NavLink
        to='/about'
        end
        >About Us</NavLink>
    </Toolbar>
  )
}