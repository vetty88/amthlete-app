// core components/views for Admin layout
import AdminDashboard from "./views/AdminDashboard/AdminDashboard";
import AddCompetition from "./views/AddCompetition/AddCompetition";
import AddHorse from "./views/AddHorse/AddHorse";
import TableList from "./views/TableList/TableList";
import CustomCompCharts from "./views/Charts/Charts";
import CompetitionDetail from "./views/CompetitionDetail/CompetitionDetail";
// import UserCompetitionDetail from "./views/UserCompetitionDetail/UserCompetitionDetail";
import HorseDetail from "./views/HorseDetail/HorseDetail";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";

const dashboardRoutes = [

  {
    path: "/adminDashboard",
    name: "AdminDashboard",
    rtlName: "AdminDashboard",
    icon: Dashboard,
    component: AdminDashboard,
    layout: "/admin"
  },
  {
    path: "/comp",
    name: "Add/Delete Competition",
    rtlName: "Add/Delete Competition",
    icon: "add",
    component: AddCompetition,
    layout: "/admin"
  },
   {
    path: "/horse",
    name: "Add/Delete Horse",
    rtlName: "Add/Delete Horse",
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
    component: CompetitionDetail,
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
  //       {
  //   path: "/usercomps",
  //   name: "User Competition Details",
  //   rtlName: "User Competition Details",
  //   icon: "content_paste",
  //   component: UserCompetitionDetail,
  //   layout: "/admin"
  // },
];


export default dashboardRoutes;