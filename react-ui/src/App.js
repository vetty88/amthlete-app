// Node Modules
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import React, { Component } from "react";

// Project Files
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Admin from "./views/Admin/Admin";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Register from "./components/auth/Register";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";

// Styling
import "./App.css";
import "./assets/css/material-dashboard-react.css";
import './index.css';

// Check for token to keep user logged in
if (localStorage.TOKEN_KEY) {
  // Set auth token header auth
  const token = localStorage.TOKEN_KEY;
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