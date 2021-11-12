import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    if (isLoading) {
        return <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <CircularProgress />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children : <Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
            ></Redirect>}
        >
        </Route>
    );
};

export default AdminRoute;