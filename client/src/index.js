import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "../src/layouts/Admin.js";
// import Competitions from "../src/layouts/Competitions.js";
import CompDetail from "../src/layouts/CompDetail.js";
import HorseDetail from "../src/layouts/HorseDetail.js";

import "../src/assets/css/material-dashboard-react.css";

// const hist = createBrowserHistory();

ReactDOM.render(
  // <Router history={hist}>
  <Router>
    <Switch>
    <Route path="/" component={Admin} />
    <Route path="/admin" component={Admin} />
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
