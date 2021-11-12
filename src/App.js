
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore/Explore';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard'
import Myorder from './Pages/Dashboard/Myorder/Myorder';
import Payment from './Pages/Dashboard/Payment/Payment';





function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>

        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
