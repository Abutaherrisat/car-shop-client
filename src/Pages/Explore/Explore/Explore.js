import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';
import Service from '../Service/Service';
import Footer from '../../Home/Footer/Footer';

const Explore = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://frozen-coast-33750.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (

        <>
          <Navigation></Navigation>
            <Grid container spacing={2}>
              
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </Grid>
            <Footer></Footer>
        </>
    );
};

export default Explore;