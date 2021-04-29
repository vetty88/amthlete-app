import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './views/Landing/Landing';
import Register from './views/Register/Register';
import Login from './views/Login/Login'

    class App extends Component {
  render() {
    return (
     
        <Router>
          <div className="App">
          {/* <Header /> */}
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            {/* <Footer /> */}
          </div>
          
        </Router>
    );
  }
}
export default App;
