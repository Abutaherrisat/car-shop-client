import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid style={{ backgroundColor: "#423A38", color: "white",marginTop:'25px' }} container spacing={1}>
                <Grid item={true} xs={12} sm={12} md={3}>
                    <h2>CAR POINT</h2>
                    <p> Level-4, 34, Awal Centre, Banani, Dhaka</p>
                    <p> Official:carpointg@gmail.com</p>
                    <p> Helpline : 01322810867 (Available : 09:00am to 7:00pm)</p>
                </Grid>
                <Grid item={true} xs={12} sm={12} md={3}>
                    <p> <i className="fab fa-instagram-square"></i> Instagram</p>
                    <p><i className="fab fa-facebook"></i> Facebook</p>
                    <p><i className="fab fa-twitter"></i> Twitter</p>
                </Grid>
                <Grid item={true} xs={12} sm={12} md={3}>
                    <h3>Quick Link</h3>
                    <ul>
                        <li>
                            <Link style={{ textDecoration: "none", color: 'white' }} to="/">HOME</Link>
                        </li>
                        <li >
                            <Link style={{ textDecoration: "none", color: 'white' }} to="/explore">EXPLORE</Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <h3>pay with</h3>
                    <p>Mstered Card</p>
                    <p>Paypal</p>
                    <p>NOGOD</p>
                    <p>ROCKET</p>
                    <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />


                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;