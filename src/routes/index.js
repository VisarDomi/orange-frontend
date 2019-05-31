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
import { setMeta } from './common';
import NotFound from "@/pages/Dashboard/NotFound";

const routes = [
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
    meta: setMeta("Not Found")
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
