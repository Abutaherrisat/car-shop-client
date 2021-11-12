import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const Gallery = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{mt:"20px",mb:'10px'}}>
                <h1>OUR GALLERY</h1>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={4}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0GZSelHVzO-Lw9FcqDZ8onGwbJrxkqiYArg&usqp=CAU" alt="" />

                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFjq0sf6PTxNoUyPlwPhPrnsSAcZDDW8EfXg&usqp=CAU" alt="" />

                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMIrm5CHwXCgjtg32cf15ucf1iA-vRQO0sg&usqp=CAU" alt="" />

                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaUprQkYOibv2wB_Jf24eNyeLm8oyPQhWGpA&usqp=CAU" alt="" />

                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRDTRJ8olXNuu5OAjulUH4AA5NE0a7WEUXJA&usqp=CAU" alt="" />

                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR53HZ1CG3KEc435zQSlaqGBye_-wiJGGOIXQ&usqp=CAU" alt="" />

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Gallery;