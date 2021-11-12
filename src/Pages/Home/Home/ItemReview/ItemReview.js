import React from 'react';
import Paper from '@mui/material/Paper';
import { Card, CardContent, CardMedia, Container, Grid, Rating, Typography } from '@mui/material';

const ItemReview = (props) => {
    const { firstName, description, img, rating } = props.review;

    return (
        <div>
            <Grid item xs={12} sm={6} md={4}>
                <div style={{ width: '300px', display: 'flex', flexWrap: 'wrap', borderRadius: '10px', boxShadow: '10px 10px 20px', padding: '10px', }}>
                    <div>
                        <p>{description}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: "10px" }}>
                            <img style={{ borderRadius: '50%' }} height='60px' width='60px' src={img ? img : `https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png`} alt="" />
                        </div>
                        <div>
                            <h5 style={{ lineHeight: '0' }}>{firstName}</h5>
                            <p style={{ lineHeight: '0' }}><Rating name="read-only" value={parseInt(rating)} readOnly /></p>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>

    );
};

export default ItemReview;