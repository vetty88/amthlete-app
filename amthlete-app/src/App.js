import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Redirect, Switch } from "react-router-dom";
import Competitions from "./pages/competitions";
import Detail from "./pages/detail";
import NoMatch from "./pages/nomatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <section className="hero-is-fullheight">
          <div className="head-head">
            <Nav />
          </div>
          <div className="head-body">
            <Switch>
              <Route path="/competitions" component={Competitions} />
              <Route path="/detail" component={Detail} />
              <Route path="/nomatch" component={NoMatch} />
              <Redirect from="/" exact to="/competitions" />
              <Redirect to="/nomatch" />
            </Switch>
          </div>
          <div className="head-foot">
            <Footer />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
