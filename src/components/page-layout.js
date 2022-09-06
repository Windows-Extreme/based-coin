import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import { Navbar } from './navbar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function PageLayout({ children }) {

  const drawerWidth = 85;
  const { user, isAuthenticated } = useAuth0();
  console.log(user)
  return (
    <Box sx={{ display: 'flex' }}>
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
          component={Link}
          to='/'
          >
          <img src="/logo.svg" alt="logo" height={40}/>
        </Button>
        </Drawer>
        <Box
          component='main'
          sx={{ flexGrow: 1, bgcolor: 'background.detault', p: 3 }}
        >
        <ToolBar />
          {children}
        </Box>
      </ThemeProvider>
    </Box>
  )
}