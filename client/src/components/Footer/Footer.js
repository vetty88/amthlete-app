/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "../../assets/jss/material-dashboard-react/components/footerStyle";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/admin/dashboard" className={classes.block}>
                Dashboard
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/admin/comp" className={classes.block}>
                Add a Comp
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/admin/table" className={classes.block}>
               Tables
              </a>
            </ListItem>

          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <p>Equestrian Competition Tracker - Y Waller</p>
          </span>
        </p>
      </div>
    </footer>
  );
}
