import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import DefaultService from '../DefaultService/DefaultService'
;

const DefaultServices = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res => res.json())
        .then(data =>setServices(data))

    },[])
    return (
        <Grid container spacing={2}>
            {
                services.map( service =><DefaultService
                key={service._id}
                service={service}
                ></DefaultService>).slice(0,6)
            }

        </Grid>
    );
};

export default DefaultServices;