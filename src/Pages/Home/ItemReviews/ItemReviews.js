import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ItemReview from '../Home/ItemReview/ItemReview';

const ItemReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://frozen-coast-33750.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        <Container>
            <h1>Reviews</h1>
            <Grid container spacing={1} sx={{ columnGap: '30px', marginTop: '20px' }}>
                {
                    reviews.map(review => <ItemReview
                        review={review} key={review._id}
                    ></ItemReview>)
                }
            </Grid>
        </Container>

    );
};

export default ItemReviews;