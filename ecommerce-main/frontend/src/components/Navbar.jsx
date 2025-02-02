import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', padding: '10px' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SHOPEE
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">Home</Button>
          </Link>

          <Link to="/log" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">Login</Button>
          </Link>

          <Link to="/reg" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">Sign Up</Button>
          </Link>

          <Link to="/cart">
            <IconButton color="primary">
              <AddShoppingCartIcon />
            </IconButton>
          </Link>
        </Box>

        {/* User Avatar */}
        <Avatar 
          src="/broken-image.jpg" 
          sx={{ marginLeft: 2, bgcolor: 'white' }} 
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
