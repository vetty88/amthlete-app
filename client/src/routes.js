/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 REACT EQUESTRIAN (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by REACT EQUESTRIAN

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard";
import CompProfile from "./views/CompProfile/CompProfile";
import TableList from "./views/TableList/TableList";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/comp",
    name: "Comp Profile",
    rtlName: "Comp Profile",
    icon: Person,
    component: CompProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  }
];

export default dashboardRoutes;
