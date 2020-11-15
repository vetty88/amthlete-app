import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Complete from "./pages/Complete";
import Competitions from "./pages/Competitions"
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Competitions} />
          <Route exact path="/competitions" component={Complete} />
          <Route exact path="/competitions/:id" component={Complete} />
          <Route exact path="/detail/:id" component={Complete} />
          <Route component={NoMatch} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;