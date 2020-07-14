
import Index from "./views/Index.js";
import Login from "./views/examples/Login.js";
import Tabs from './views/examples/Tabs.js'
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
 
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/tabs",
    name: "Tabs",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tabs,
    layout: "/admin"
  }
 
  
];
export default routes;
