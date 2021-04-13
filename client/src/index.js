import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router , Switch , Route } from "react-router-dom";

// core components
import Admin from "../src/layouts/Admin.js";
// import Competitions from "../src/layouts/Competitions.js";
import Detail from "../src/layouts/Detail.js";

import "../src/assets/css/material-dashboard-react.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/" component={Admin} />
      <Route path="/admin" component={Admin} />
      {/* <Route path="/admin/comp" component={Competitions} /> */}
      <Route path="/competitions/:id" component={Detail}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
