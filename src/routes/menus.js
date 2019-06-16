const DashboardLayout = () => import("@/pages/Dashboard/Layout/DashboardLayout.vue");

// Pages
const User = () => import("@/pages/Dashboard/Pages/UserProfile.vue");
const TimeLine = () => import("@/pages/Dashboard/Pages/TimeLinePage.vue");
const RtlSupport = () => import("@/pages/Dashboard/Pages/RtlSupport.vue");

// Components pages
const Buttons = () => import("@/pages/Dashboard/Components/Buttons.vue");
const GridSystem = () => import("@/pages/Dashboard/Components/GridSystem.vue");
const Panels = () => import("@/pages/Dashboard/Components/Panels.vue");
const SweetAlert = () => import("@/pages/Dashboard/Components/SweetAlert.vue");
const Notifications = () => import("@/pages/Dashboard/Components/Notifications.vue");
const Icons = () => import("@/pages/Dashboard/Components/Icons.vue");
const Typography = () => import("@/pages/Dashboard/Components/Typography.vue");

// Forms pages
const RegularForms = () => import("@/pages/Dashboard/Forms/RegularForms.vue");
const ExtendedForms = () => import("@/pages/Dashboard/Forms/ExtendedForms.vue");
const ValidationForms = () => import("@/pages/Dashboard/Forms/ValidationForms.vue");
const Wizard = () => import("@/pages/Dashboard/Forms/Wizard.vue");

// TableList pages
const RegularTables = () => import("@/pages/Dashboard/Tables/RegularTables.vue");
const ExtendedTables = () => import("@/pages/Dashboard/Tables/ExtendedTables.vue");
const PaginatedTables = () => import("@/pages/Dashboard/Tables/PaginatedTables.vue");

// Maps pages
const GoogleMaps = () => import("@/pages/Dashboard/Maps/GoogleMaps.vue");
const FullScreenMap = () => import("@/pages/Dashboard/Maps/FullScreenMap.vue");
const VectorMaps = () => import("@/pages/Dashboard/Maps/VectorMaps.vue");

import { setMeta } from "./common";

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

let fullScreenMeta = setMeta("Full Screen Map");
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
      components: { default: FullScreenMap },
      meta: {
        ...fullScreenMeta,
        hideContent: true,
        hideFooter: true,
        navbarAbsolute: true
      }
    },
    {
      path: "vector-map",
      name: "VectorMap",
      components: { default: VectorMaps },
      meta: setMeta("Vector Map")
    }
  ]
};
