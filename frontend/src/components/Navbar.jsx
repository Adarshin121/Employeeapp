import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color='secondary'>
      <Toolbar>
      
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          StudentApp
        </Typography>
        <Button >
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
            View
            </Link>
            </Button>

        <Button >
          <Link to={'/add'} style={{textDecoration:'none', color:'white'}}>
            Add
            </Link>
            </Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar