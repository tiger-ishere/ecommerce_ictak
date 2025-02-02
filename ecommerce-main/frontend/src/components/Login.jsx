import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        WELCOME BACK!!
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 400,
          margin: '20px auto',
          gap: 2, // Adds spacing between fields
        }}
      >
        <TextField id="email" label="Email ID" variant="outlined" fullWidth />
        <TextField id="password" label="Password" variant="outlined" type="password" fullWidth />
        
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/pro" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Login</Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
