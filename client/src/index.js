import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import React from "react";
// import ReactDOM from "react-dom";
// // import { createBrowserHistory } from "history";

// import { Landing } from "./views/Landing/Landing";
// import { AppLayout } from "./layouts/layout";
// import { ProtectedRoute } from "./views/PrivateRoute/PrivateRoute";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// // core components
// // import Admin from "./views/Admin/Admin";
// import "./styles.css";

// import "./assets/css/material-dashboard-react.css";

// function App() {
//   return (
//     <div className="App">
//     <Switch>
//       <Route exact path= "/" component = {Landing} />
//       <ProtectedRoute exact path="/app" component = {AppLayout} />
//       <Route path="*" component={() => "404 NOT FOUND"} />
//     </Switch>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>, 
//   rootElement
//   );

// const hist = createBrowserHistory();

// ReactDOM.render(
//   <Router history={hist}>
//     <Switch>
//       <Route path="/admin" component={Admin} />
//       <Redirect from="/" to="/admin/dashboard" />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );
