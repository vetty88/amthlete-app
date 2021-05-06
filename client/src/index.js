import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "./views/Admin/Admin";
import AdminDashboard from "./views/AdminDashboard/AdminDashboard";
// import Competitions from "../src/layouts/Competitions.js";
import CompDetail from "./views/CompDetail/CompDetail";
import HorseDetail from "./views/HorseDetail/HorseDetail";

import "./assets/css/material-dashboard-react.css";

// const hist = createBrowserHistory();

ReactDOM.render(
  // <Router history={hist}>
  <Router>
    <Switch>
    <Route path="/admin" component={Admin} />
    <Route path="/admin/competitions" component={CompDetail}/>
    {CompDetail}
    <Route path="/admin/horses" component={HorseDetail}/>
    {HorseDetail}
  
    <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
