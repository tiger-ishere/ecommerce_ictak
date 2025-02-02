import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {data.map((val) => (
          <Grid item xs={12} sm={6} md={4} key={val.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={val.image}
                title={val.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {val.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Typography variant="subtitle2" component="h3">
                    {val.category}
                  </Typography>
                  {val.description}
                  <Typography variant="h6" component="h2">
                    ₹{val.price}
                  </Typography>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Buy</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cart;
