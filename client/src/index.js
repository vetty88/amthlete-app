import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import App from "../src/App.js";
// import Competitions from "../src/layouts/Competitions.js";
import CompDetail from "../src/layouts/CompDetail.js";
import HorseDetail from "../src/layouts/HorseDetail.js";

import "../src/assets/css/material-dashboard-react.css";

// const hist = createBrowserHistory();

ReactDOM.render(
  // <Router history={hist}>
  <Router>
    <Switch>
    <Route path="/" component={App} />
    <Route path="/admin" component={App} />
    {/* <Route path="/admin/comp" component={Competitions} /> */}
    <Route path="/admin/competitions/:id" component={CompDetail}/>
    {CompDetail}
    <Route path="/admin/horses/:id" component={HorseDetail}/>
    {HorseDetail}
  
    <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
