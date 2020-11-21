import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Save from "./pages/Save";
import Search from "./pages/Search";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Save} />
          <Route exact path="/saved/:id" component={Save} />
          <Route component={NoMatch} /> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;