import React from 'react';
import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import { UnsignedNavbar } from './unsigned-navbar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const UnsignedLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppBar
          position="fixed"
        >
          <UnsignedNavbar />
        </AppBar>
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