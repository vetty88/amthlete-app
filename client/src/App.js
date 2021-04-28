import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/Navbars/Navbar";
import Landing from "./views/Landing/Landing";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import PrivateRoute from "./views/PrivateRoute/PrivateRoute";
import { Dashboard } from "./views/Dashboard/Dashboard";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;


// import "perfect-scrollbar/css/perfect-scrollbar.css";
// import { makeStyles } from "@material-ui/core/styles";
// import { Switch, Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import AddComp from "../views/AddComp/AddComp";
// import AddHorse from "../views/AddHorse/AddHorse";
// import bgImage from "../assets/img/Jumping.jpg";
// import CompDetail from "../layouts/CompDetail";
// import CustomCompCharts from "../views/Charts/Charts";
// import Dashboard from "@material-ui/icons/Dashboard";
// import Dashboard from "../views/Dashboard/Dashboard";
// import dashboardRoutes from "../dashboardRoutes";
// import Footer from "../components/Footer/Footer.js";
// import HorseDetail from "../layouts/HorseDetail";
// import Login from "../views/Login/Login"
// import logo from "../assets/img/reactlogo.png";
// import Navbar from "../components/Navbars/Navbar.js";
// import PerfectScrollbar from "perfect-scrollbar";
// import Person from "@material-ui/icons/Person";
// import React, { Component } from "react";
// import Register from "../views/Register/Register"
// import Sidebar from "../components/Sidebar/Sidebar"
// import store from "../store";
// import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";
// import TableList from "../views/TableList/TableList";

// let ps;
// const switchDashboardRoutes = ( < Switch> {
//     dashboardRoutes.map((prop, key) => {
//         if (prop.layout === "/admin") {
//         return (
//         < Route path={ prop.layout + prop.path } component={ prop.component } key={ key } />
//         );
//         }
//     return null;
//     })
// } 

// < Redirect from="/admin" to="/admin/dashboard" />
// </Switch>
// );

// const useStyles = makeStyles(styles);

// export default function Admin({ ...rest }) {
// const classes = useStyles();
// const mainPanel = React.createRef();

// const [image, setImage] = React.useState(bgImage);
// const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
// const [mobileOpen, setMobileOpen] = React.useState(false);
// const handleImageClick = image => {setImage(image); };

// const handleFixedClick = () => {
// if (fixedClasses === "dropdown") {
//     setFixedClasses("dropdown show");
//         } else {
//         setFixedClasses("dropdown");
//         }
// };

// const handleDrawerToggle = () => {setMobileOpen(!mobileOpen);};
// const getDashboardRoute = () => {return window.location.pathname !== "/admin";};
// const resizeFunction = () => {if (window.innerWidth >= 960) {setMobileOpen(false);}};

// React.useEffect(() => {
//     if (navigator.platform.indexOf("Win") > -1) {
//         ps = new PerfectScrollbar(mainPanel.current, {
//         suppressScrollX: true,
//         suppressScrollY: false
//         });
//     document.body.style.overflow = "hidden";
//     }
//     window.addEventListener("resize", resizeFunction);
//     return function cleanup() {
//         if (navigator.platform.indexOf("Win") > -1) {
//         ps.destroy();
//         }
//     window.removeEventListener("resize", resizeFunction);
//     };
// }, [mainPanel]);

//     return ( 
//         <div className={ classes.wrapper }>
//             <Sidebar dashboardRoutes={ dashboardRoutes } logoText={ "REACT EQUESTRIAN" } logo={ logo } image={ image } handleDrawerToggle={ handleDrawerToggle } open={ mobileOpen } { ...rest } />
//         <div className={ classes.mainPanel } ref={ mainPanel }>
//             <Navbar dashboardRoutes={ dashboardRoutes } handleDrawerToggle={ handleDrawerToggle } { ...rest } /> {
//             getDashboardRoute() ? ( < div className={ classes.content }>
//         <div className={ classes.container }> {switchDashboardRoutes} 
//         </div>
//         </div>
//         ) : ( < div className={ classes.map }> {switchDashboardRoutes} 
//         </div>
//         )
//         } 
//             {getDashboardRoute() ? < Footer /> : null}
//         </div>
//         </div>
//     );
// }