import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Save from "./pages/Save";
import Search from "./pages/Search"
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/competitions" component={Save} />
          <Route exact path="/competitions/:id" component={Save} />
          <Route exact path="/detail/:id" component={Save} />
          <Route component={NoMatch} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;