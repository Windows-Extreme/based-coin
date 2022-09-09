import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Typography,
  Box,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
} from '@mui/material';
import { Home, Store } from '@mui/icons-material'
import Navbar from './navbar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function PageLayout({ children }) {

  const drawerWidth = 150;
  const { isAuthenticated } = useAuth0();
  return (
    <Box sx={{ display: 'flex' }}>
    {isAuthenticated && (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Navbar />
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
        <Button
          sx={{
            marginTop: 1
          }}
          component={Link}
          to='/'
          >
          <img src="/logo.svg" alt="logo" height={40}/>
        </Button>
        
        <Button
          sx={{
            marginLeft: 1,
            marginTop: 2,
            justifyContent: 'start'
          }}
          color='inherit'
          component={Link}
          to='/home'
        ><Home/><Typography ml={3} pt='2px'>Home</Typography></Button>
        <Button 
          sx={{
            marginLeft: 1,
            marginTop: 2,
            justifyContent: 'start'
          }}
          color='inherit'
          component={Link}
          to='/market'
        ><Store/><Typography ml={3} pt='2px'>Market</Typography></Button>
        </Drawer>
        
        <Box
          component='main'
          sx={{ flexGrow: 1, bgcolor: 'background.detault', p: 3 }}
        >
        <Toolbar />
          {children}
        </Box>
      </ThemeProvider>
    )}
    </Box>
  )
}