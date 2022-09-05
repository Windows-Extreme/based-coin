import React from 'react';
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import { Navbar } from './navbar';


export const UnsignedLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
      >
        <Navbar />
      </AppBar>
      
      <Box
        component='main'
        sx={{ flexGrow: 1, bgcolor: 'background.detault', p: 3 }}
      >
        {children}
      </Box>
    </Box>
  )
}