import {
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  authPages
} from "./menus";
import { admin } from "./admin";
import { company } from "./company";

const routes = [
  {
    path: "/",
    redirect: "/reservations",
    name: "Home"
  },
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  authPages,
  company,
  admin
];

export default routes;
