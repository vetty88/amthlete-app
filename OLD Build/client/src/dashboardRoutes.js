import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import AddComp from "./views/AddComp/AddComp";
import AddHorse from "./views/AddHorse/AddHorse";
import CompDetail from "./views/CompDetail/CompDetail";
import CustomCompCharts from "./views/Charts/Charts";

import Dashboard from "./views/Dashboard/Dashboard";
import HorseDetail from "./views/HorseDetail/HorseDetail";
// import Login from "./views/Login/Login"
import Person from "@material-ui/icons/Person";
import React, { Component } from "react";
// import Register from "./views/Register/Register"
import store from "./store";
import TableList from "./views/TableList/TableList";

const dashboardRoutes = [
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: Person,
  //   component: Login,
  //   layout: "/admin"
  // },
  //   {
  //   path: "/register",
  //   name: "Register",
  //   icon: Person,
  //   component: Register,
  //   layout: "/admin"
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Dashboard",
    icon: "dashboard",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/comp",
    name: "Add Competition",
    rtlName: "Add Competition",
    icon: "add",
    component: AddComp,
    layout: "/admin"
  },
   {
    path: "/horse",
    name: "Add Horse",
    rtlName: "Add Horse",
    icon: "add",
    component: AddHorse,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "Table List",
    icon: "reorder",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/charts",
    name: "Charts",
    rtlName: "Charts",
    icon: "addchart",
    component: CustomCompCharts,
    layout: "/admin"
  },
    {
    path: "/competitions",
    name: "Competition Details",
    rtlName: "Competition Details",
    icon: "class",
    component: CompDetail,
    layout: "/admin"
  },
      {
    path: "/horses",
    name: "Horse Details",
    rtlName: "Horse Details",
    icon: "content_paste",
    component: HorseDetail,
    layout: "/admin"
  },
];

export default dashboardRoutes;
