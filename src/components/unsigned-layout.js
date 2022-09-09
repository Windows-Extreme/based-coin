import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Box, CssBaseline, AppBar, Toolbar
} from '@mui/material'
import UnsignedNavbar from './unsigned-navbar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function UnsignedLayout({ children }) {
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
          sx={{ flexGrow: 1, bgcolor: 'background.detault', p: 0 }}
        >
          <Toolbar />
          {children}
        </Box>
      </ThemeProvider>
    </Box>
  )
}