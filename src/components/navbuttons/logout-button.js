import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import {MenuItem, ListItemIcon} from '@mui/material'
import Logout from '@mui/icons-material/Logout';

export default function LogoutButton() {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  }

  return (
    <MenuItem onClick={handleLogout}>
      <ListItemIcon>
        <Logout fontSize='small' />
      </ListItemIcon>
      Logout
    </MenuItem>
  )
}