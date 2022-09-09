import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Button from '@mui/material/Button';

export default function SignupButton() {
  const { loginWithRedirect } = useAuth0();

  const handleSignup = async () => {
    await loginWithRedirect({
      prompt: 'login',
      screen_hint: 'signup',
      appState: {
        returnTo: '/home',
      },
    });
  }

  return (
    <Button color='inherit' onClick={handleSignup}>
      Sign Up
    </Button>
  )
}