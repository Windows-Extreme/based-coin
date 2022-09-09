import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Toolbar,
  Avatar,
  Menu,
  IconButton,
  Tooltip,
  Box,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import LogoutButton from './navbuttons/logout-button';


export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  const { user } = useAuth0();
  return (
    <Toolbar>
      <Box ml={'auto'}>
      <Tooltip title='Meet the Fellows'>
        <IconButton
          color='inherit'
          component={Link}
          to='/about'>
          <InfoIcon/>
        </IconButton>
      </Tooltip>
      <Tooltip title='Account'>
        <IconButton
          onClick={handleClick}
          size='small'
          sx={{ ml: 2 }}>
          <Avatar sx={{ width: 40, height: 40 }} alt={user.name} src={user.picture}></Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px #000000aa',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <LogoutButton />
      </Menu>
      </Box>
    </Toolbar>
  )
}