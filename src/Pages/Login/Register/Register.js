import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { user, error, registerUser, isLoading } = useAuth()
    const location = useLocation();
    const history = useHistory()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(newLoginData);

    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not mached')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid sx={{ mt: 8 }} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: '75%', m: 1 }}
                            name='name'
                            onBlur={handleOnBlur}
                            id="standard-basic"
                            type='name'
                            label="your Name"
                            variant="standard"
                        />
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
                        <TextField sx={{ width: '75%', m: 1 }}
                            name='password2'
                            onBlur={handleOnBlur} id="standard-basic"
                            type='password'
                            label="Re Enter Your Password"
                            variant="standard"
                        />
                        <NavLink style={{ textDecoration: 'none' }} to='/login'>
                            <Button variant="text">Already Have An Account? Please Login</Button>
                        </NavLink>
                        <Button sx={{ width: '75%', m: 1 }}
                            type="submit" variant="contained">Register</Button>
                    </form>}
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

export default Register;