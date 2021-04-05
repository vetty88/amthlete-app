// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard";
import CompProfile from "./views/CompProfile/CompProfile";
import TableList from "./views/TableList/TableList";
import CustomCharts from "./views/Charts/Charts"

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
  },
  {
    path: "/charts",
    name: "Charts",
    rtlName: "Charts",
    icon: "content_paste",
    component: CustomCharts,
    layout: "/admin"
  }
];

export default dashboardRoutes;
