import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import dashboardRoutes from "../dashboardRoutes";
import Sidebar from "../components/Sidebar/Sidebar"
import Navbar from "../components/Navbars/Navbar.js";
import Footer from "../components/Footer/Footer.js";

import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle.js";
import bgImage from "../assets/img/Jumping.jpg";
import logo from "../assets/img/reactlogo.png";


let ps;

const switchDashboardRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image, setImage] = React.useState(bgImage);
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleImageClick = image => {
    setImage(image);
  };

  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getDashboardRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      <Sidebar
        dashboardRoutes={dashboardRoutes}
        logoText={"REACT EQUESTRIAN"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}

        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          dashboardRoutes={dashboardRoutes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
          {getDashboardRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchDashboardRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchDashboardRoutes}</div>
        )}
        {getDashboardRoute() ? <Footer /> : null}

      </div>
    </div>
  );
}
