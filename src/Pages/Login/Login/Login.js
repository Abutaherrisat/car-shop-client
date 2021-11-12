import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState, } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, error, loginUser, isLoading } = useAuth();
    const history = useHistory()
    const location = useLocation()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(field, value);

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    return (
        <Container>
            <Grid sx={{ mt: 8 }} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>Login</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: '75%', m: 1 }}
                            name='email'
                            onBlur={handleOnBlur}
                            id="standard-basic"
                            type='email'
                            label="your email"
                            variant="standard"
                        />
                        <TextField sx={{ width: '75%', m: 1 }}
                            name='password'
                            onBlur={handleOnBlur} id="standard-basic"
                            type='password'
                            label="your password"
                            variant="standard"
                        />
                        <NavLink style={{ textDecoration: 'none' }} to='/register'>
                            <Button variant="text"> NEW USER? please register</Button>
                        </NavLink>
                        <Button sx={{ width: '75%', m: 1 }}
                            type="submit" variant="contained">Login</Button>

                    </form>
                    }
                    {
                        isLoading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CircularProgress />
                        </div>
                    }
                    {
                        user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>
                    }
                    {
                        error && <Alert severity="error">Something went wrong! please try again...</Alert>

                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '75%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi6aaUGa2zk2FZG2TNytOQ83xUysnGOEUTSg&usqp=CAU" alt="" />

                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;