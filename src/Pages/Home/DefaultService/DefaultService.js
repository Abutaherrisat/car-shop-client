import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';



const DefaultService = (props) => {
  const { name, img, price, description, _id } = props.service
  return (

    <Grid item xs={12} sm={6} md={4}>
      <Container sx={{ mt: '40px' }}>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="240"
            image={img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {price}
            </Typography>
            <Link style={{textDecoration:'none',color:'white'}} to={`/booking/${_id}`}>
              <Button variant="contained">BUY NOW</Button>
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Grid>


  );
};

export default DefaultService;