// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard";
import AddComp from "./views/AddComp/AddComp";
import AddHorse from "./views/AddHorse/AddHorse";
import Login from "./views/Login/Login"
import TableList from "./views/TableList/TableList";
import CustomCompCharts from "./views/Charts/Charts";
import CompDetail from "./layouts/CompDetail";
import HorseDetail from "./layouts/HorseDetail";

const dashboardRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: Person,
    component: Login,
    layout: "/admin"
  },
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
