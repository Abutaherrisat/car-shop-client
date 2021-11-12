import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid, TextField } from '@mui/material';
import { useHistory, useParams } from 'react-router';
import Navigation from '../../Shared/Navigation/Navigation';
import useAuth from '../../../Hooks/useAuth';

const Booking = () => {
  const { serviceId } = useParams()
  const [service, setService] = useState({});
  const { user } = useAuth()
  const history = useHistory()
  const [bookingData, setBookingData] = useState({})
  const {name,img,price,description} = service
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newBookingData = { ...bookingData }
    newBookingData[field] = value;
    setBookingData(newBookingData)
    console.log(newBookingData);

  }
  useEffect(() => {
    fetch(`https://frozen-coast-33750.herokuapp.com/cars/${serviceId}`)
      .then(res => res.json())
      .then(data => setService(data))

  }, [serviceId])
  const handleBookingSubmit = e => {
    const order = {
      ...bookingData,
      clientName:user.displayName,
      email:user.email,
      carName:name,
    }
    fetch('https://frozen-coast-33750.herokuapp.com/orders',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
     body: JSON.stringify(order)
    })
   .then(res => res.json())
    .then(data =>{
      history.push('/dashboard')
      console.log(data)
     if(data.insertedId){
       alert('order placed successfully')
      
     }
    })
  
    e.preventDefault()
  }
  return (
    <div>
      <Navigation></Navigation>
      <Grid sx={{ mt: 8 }} container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Container sx={{ mt: '40px' }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
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
              </CardContent>
            </Card>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <h1>BOOKING</h1>
          <form onSubmit={handleBookingSubmit}>
            <TextField sx={{ width: '75%', m: 1 }}
            disabled
              name=' car name'
              onBlur={handleOnBlur}
              id="outlined-size-small"
              type='name'
              value={service.name}
              size="small"
              
            />
            <TextField sx={{ width: '75%', m: 1 }}
              name='name'
              onBlur={handleOnBlur}
              type='name'
              defaultValue={user.displayName}
              size="small"
            />
            <TextField sx={{ width: '75%', m: 1 }}
              name='email'
              onBlur={handleOnBlur}
              type='email'
              defaultValue={user.email}
              size="small"
            />
            <TextField sx={{ width: '75%', m: 1 }}
              name='number'
              onBlur={handleOnBlur}
              id="standard-basic"
              type='number'
              label='your phone number'
              size="small"
            />
            <TextField sx={{ width: '75%', m: 1 }}
              name='address'
              onBlur={handleOnBlur}
              id="standard-basic"
              type='address'
              label='Address'
              size="small"
            />
            <Button sx={{ width: '75%', m: 1 }}
              type="submit" variant="contained">Place Order</Button>

          </form>
        </Grid>
      </Grid>


    </div>
  );
};

export default Booking;