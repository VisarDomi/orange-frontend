import {
  pagesMenu,
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu
} from "./menus";
import { admin } from "./admin";
import { auth } from './auth';
import { company } from "./company";
import { employee } from "./employee";
import { setMeta } from './common';
import NotFound from "@/pages/Dashboard/Pages/NotFound";

const routes = [
  pagesMenu,
  admin,
  auth,
  company,
  employee,
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
    meta: setMeta("Not Found")
  },
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu
];

export default routes;
