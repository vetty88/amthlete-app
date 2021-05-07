import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import React, { Component } from "react";
import ReactDOM from "react-dom";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import Admin from "./views/Admin/Admin";
import AdminDashboard from "./views/AdminDashboard/AdminDashboard";
import CompDetail from "./views/CompDetail/CompDetail";
import Dashboard from "./components/Dashboard/Dashboard";
import HorseDetail from "./views/HorseDetail/HorseDetail";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Register from "./components/auth/Register";
import reportWebVitals from './reportWebVitals';
import setAuthToken from "./utils/setAuthToken";
import store from "./store";

import "./App.css";
import "./assets/css/material-dashboard-react.css";
import './index.css';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                    {/* <Navbar /> */}
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Switch>
                        <PrivateRoute path="/admin" component={Admin} />
                    </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}
export default App;