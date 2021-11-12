import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddCar from './AddCar/AddCar';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import Payment from './Payment/Payment';
import Review from './Review/Review';
import ManageAllOrder from './ManageAllOrder/ManageAllOrder';
import ManageProduct from './ManageProduct/ManageProduct';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const {admin} = useAuth()
    let { path, url } = useRouteMatch();
    const { logout } = useAuth()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Container>
            <Link style={{ textDecoration: 'none', color: 'blue' }} to='/explore'>
                <Button color="inherit">Explore</Button>
            </Link>
            <br />
            <Link style={{ textDecoration: 'none', color: 'blue' }} to={`${url}/payment`}>
                <Button color="inherit">Payment</Button>
            </Link>
            <br />
            <Link style={{ textDecoration: 'none', color: 'blue' }} to={`${url}/review`}>
                <Button color="inherit">Review</Button>
            </Link>
            <br />
            <Link style={{ textDecoration: 'none', color: 'blue' }} to={`${url}`}>
                <Button color="inherit">My Order</Button>
            </Link>
            <br />
            {
                admin && <Box>
                    <Link  style={{ textDecoration: 'none', color: 'blue' }} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                    <br />
                    <Link  style={{ textDecoration: 'none', color: 'blue' }} to={`${url}/addcar`}><Button color="inherit">Add Car</Button></Link>
                    <br />
                    <Link  style={{ textDecoration: 'none', color: 'blue' }} to={`${url}/manageallorder`}><Button color="inherit">Manage All Order</Button></Link>
                    <Link  style={{ textDecoration: 'none', color: 'blue' }} to={`${url}/manageproduct`}><Button color="inherit">Manage Product</Button></Link>
                </Box>
            }
            <br />
            <Link style={{ textDecoration: 'none', color: 'blue',marginLeft:'5px' }} to={`${url}/logout`}>
                <Button onClick={logout} color="inherit">Logout</Button>
            </Link>
            </Container>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/payment`}>
          <Payment></Payment>
        </Route>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageallorder`}>
          <ManageAllOrder></ManageAllOrder>
        </AdminRoute>
        <AdminRoute path={`${path}/addCar`}>
            <AddCar></AddCar>
        </AdminRoute>
        <AdminRoute path={`${path}/manageproduct`}>
            <ManageProduct></ManageProduct>
        </AdminRoute>
      </Switch>


            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
