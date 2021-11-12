import React from 'react';
import { Button,  Typography,Box,Grid } from '@mui/material';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    const center = {
        display: 'flex',
        height: "600px",
        alignItems: 'center',
    }
    return (
        <Grid  className='banner-container' container spacing={2} mt={5}>
            <Grid style={{...center}} item xs={12} md={5}>
                <Box>
                    <Typography  sx={{ color: 'white', fontWeight: 600 }} variant='h3'>
                        YOU HAVE EVERYTHING <br />
                        YOUR CAR NEED
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: 12, color: 'white', fontWeight: 300 }}>We Are Suggesting You The Best Car With LOwest Price</Typography>
                   <Link style={{textDecoration:'none',color:'white'}} to='/explore'>
                   <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>VIST SHOP</Button>
                   </Link>
                </Box>
            </Grid>
        </Grid>
  
    );
};

export default Banner;