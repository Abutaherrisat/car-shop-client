import { Grid } from '@mui/material';
import React from 'react';
import Myorder from '../Myorder/Myorder';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
            <Myorder></Myorder>
        </Grid>
    </Grid>

    );
};

export default DashboardHome;