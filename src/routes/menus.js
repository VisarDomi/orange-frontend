import DashboardLayout from "@/pages/Dashboard/Layout/DashboardLayout.vue";
import AuthLayout from "@/pages/Dashboard/Pages/AuthLayout.vue";

// Pages
import User from "@/pages/Dashboard/Pages/UserProfile.vue";
import Role from "@/pages/Dashboard/Pages/Role.vue";
import TimeLine from "@/pages/Dashboard/Pages/TimeLinePage.vue";
import RtlSupport from "@/pages/Dashboard/Pages/RtlSupport.vue";
import Logout from "@/pages/Dashboard/Pages/Logout.vue";
import Login from "@/pages/Dashboard/Pages/Login.vue";
import Register from "@/pages/Dashboard/Pages/Register.vue";
import Lock from "@/pages/Dashboard/Pages/Lock.vue";

// Components pages
import Buttons from "@/pages/Dashboard/Components/Buttons.vue";
import GridSystem from "@/pages/Dashboard/Components/GridSystem.vue";
import Panels from "@/pages/Dashboard/Components/Panels.vue";
import SweetAlert from "@/pages/Dashboard/Components/SweetAlert.vue";
import Notifications from "@/pages/Dashboard/Components/Notifications.vue";
import Icons from "@/pages/Dashboard/Components/Icons.vue";
import Typography from "@/pages/Dashboard/Components/Typography.vue";

// Forms pages
import RegularForms from "@/pages/Dashboard/Forms/RegularForms.vue";
import ExtendedForms from "@/pages/Dashboard/Forms/ExtendedForms.vue";
import ValidationForms from "@/pages/Dashboard/Forms/ValidationForms.vue";
import Wizard from "@/pages/Dashboard/Forms/Wizard.vue";

// TableList pages
import RegularTables from "@/pages/Dashboard/Tables/RegularTables.vue";
import ExtendedTables from "@/pages/Dashboard/Tables/ExtendedTables.vue";
import PaginatedTables from "@/pages/Dashboard/Tables/PaginatedTables.vue";

// Maps pages
import GoogleMaps from "@/pages/Dashboard/Maps/GoogleMaps.vue";
import FullScreenMap from "@/pages/Dashboard/Maps/FullScreenMap.vue";
import VectorMaps from "@/pages/Dashboard/Maps/VectorMaps.vue";

import { setMeta } from './common';

export const componentsMenu = {
  path: "/components",
  component: DashboardLayout,
  redirect: "/components/buttons",
  name: "Components",
  children: [
    {
      path: "buttons",
      name: "Buttons",
      components: { default: Buttons },
      meta: setMeta("Buttons")
    },
    {
      path: "grid-system",
      name: "GridSystem",
      components: { default: GridSystem },
      meta: setMeta("Grid System")
    },
    {
      path: "panels",
      name: "Panels",
      components: { default: Panels },
      meta: setMeta("Panels")
    },
    {
      path: "sweet-alert",
      name: "SweetAlert",
      components: { default: SweetAlert },
      meta: setMeta("Sweet Alert")
    },
    {
      path: "notifications",
      name: "Notifications",
      components: { default: Notifications },
      meta: setMeta("Notifications")
    },
    {
      path: "icons",
      name: "Icons",
      components: { default: Icons },
      meta: setMeta("Icons")
    },
    {
      path: "typography",
      name: "Typography",
      components: { default: Typography },
      meta: setMeta("Typography")
    }
  ]
};

export const formsMenu = {
  path: "/forms",
  component: DashboardLayout,
  redirect: "/forms/regular",
  name: "Forms",
  children: [
    {
      path: "regular",
      name: "RegularForms",
      components: { default: RegularForms },
      meta: setMeta("Regular Forms")
    },
    {
      path: "extended",
      name: "ExtendedForms",
      components: { default: ExtendedForms },
      meta: setMeta("Extended Forms")
    },
    {
      path: "validation",
      name: "ValidationForms",
      components: { default: ValidationForms },
      meta: setMeta("Validation Forms")
    },
    {
      path: "wizard",
      name: "Wizard",
      components: { default: Wizard },
      meta: setMeta("Wizard")
    }
  ]
};

export const tablesMenu = {
  path: "/table-list",
  component: DashboardLayout,
  redirect: "/table-list/regular",
  name: "Tables",
  children: [
    {
      path: "regular",
      name: "RegularTables",
      components: { default: RegularTables },
      meta: setMeta("Regular Tables")
    },
    {
      path: "extended",
      name: "ExtendedTables",
      components: { default: ExtendedTables },
      meta: setMeta("Extended Tables")
    },
    {
      path: "paginated",
      name: "PagiantedTables",
      components: { default: PaginatedTables },
      meta: setMeta("Pagianted Tables")
    }
  ]
};

export const mapsMenu = {
  path: "/maps",
  component: DashboardLayout,
  name: "Maps",
  redirect: "/maps/google",
  children: [
    {
      path: "google",
      name: "GoogleMaps",
      components: { default: GoogleMaps },
      meta: setMeta("Google Maps")
    },
    {
      path: "full-screen",
      name: "FullScreenMap",
      meta: {
        hideContent: true,
        hideFooter: true,
        navbarAbsolute: true,
        title: `Full Screen Map`,
        metaTags: [
          {
            name: "description",
            content: `The Full Screen Map page of Orange Limo.`
          },
          {
            property: "og:description",
            content: `The Full Screen Map page of Orange Limo.`
          }
        ]
      },
      components: { default: FullScreenMap }
    },
    {
      path: "vector-map",
      name: "VectorMap",
      components: { default: VectorMaps },
      meta: setMeta("Vector Map")
    }
  ]
};

export const pagesMenu = {
  path: "/pages",
  component: DashboardLayout,
  name: "Pages",
  redirect: "/pages/user",
  children: [
    {
      path: "user",
      name: "User",
      components: { default: User },
      meta: setMeta("User")
    },
    {
      path: "timeline",
      name: "Timeline",
      components: { default: TimeLine },
      meta: setMeta("Timeline")
    },
    {
      path: "rtl",
      name: "وحة القيادة",
      meta: {
        rtlActive: true
      },
      components: { default: RtlSupport }
    }
  ]
};

export const authPages = {
  path: "/auth",
  component: AuthLayout,
  name: "Authentication",
  children: [
    {
      path: "/logout",
      name: "Logout",
      components: {default: Logout},
      meta: setMeta("Logout")
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: setMeta("Login")
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: setMeta("Register")
    },
    {
      path: "/role",
      name: "Role",
      component: Role,
      meta: setMeta("Role")
    },
    {
      path: "/lock",
      name: "Lock",
      component: Lock,
      meta: setMeta("Lock")
    }
  ]
};
