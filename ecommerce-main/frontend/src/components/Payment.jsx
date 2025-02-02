import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <div>
      <Typography variant="h5" align="center" gutterBottom>
        Payment Details
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 400,
          margin: '20px auto',
          gap: 2, // Adds spacing between elements
        }}
      >
        <TextField id="card-number" label="Card Number" variant="outlined" fullWidth />
        <TextField id="pin" label="PIN" variant="outlined" type="password" fullWidth />
        
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Order</Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Payment;
