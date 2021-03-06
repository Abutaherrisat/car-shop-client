import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Navigation = () => {
    const { user, logout } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor:'gray', padding:'10px' }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Car Point
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to='/home'>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to='/explore'>
                        <Button color="inherit">Explore</Button>
                    </Link>


                    {
                        user.email ?
                            <Box>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'>
                                    <Button color="inherit">DashBoard</Button>
                                </Link>
                                <Button onClick={logout} color="inherit">Logout</Button>

                            </Box>

                            :
                            <Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>
                                <Button color="inherit">Login</Button>
                            </Link>


                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;