/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";



import styles from "../../assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  // verifies if dashboardRouteName is the one active (in browser input)
  function activeDashboardRoute(dashboardRouteName) {
    return window.location.href.indexOf(dashboardRouteName) > -1 ? true : false;
  }
  const { color, logo, image, logoText, dashboardRoutes } = props;
  var links = (
    <List className={classes.list}>
      {dashboardRoutes.map((prop, key) => {
        var listItemClasses;
          listItemClasses = classNames({
            [" " + classes[color]]: activeDashboardRoute(prop.layout + prop.path)
          });
        
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeDashboardRoute(prop.layout + prop.path)
        });
        return (
          <NavLink
            to={prop.layout + prop.path}
            className={classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                />
              )}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <a
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive
        })}
        target="_blank"
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        <h4
        style={{ color: "white" }}> {logoText} </h4>
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}

          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
        >
          {brand}
          <div className={classes.SidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  dashboardRoutes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool
};