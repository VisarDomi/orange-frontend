import DashboardLayout from "@/pages/Dashboard/Layout/DashboardLayout.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard/Pages/Admin/Dashboard.vue";
import Reservations from "@/pages/Dashboard/Pages/Admin/Reservations.vue";
import ReservationDetail from "@/pages/Dashboard/Pages/Admin/ReservationDetail.vue";
import CreateDriver from "@/pages/Dashboard/Pages/Admin/CreateDriver.vue";
import Drivers from "@/pages/Dashboard/Pages/Admin/Drivers.vue";
import DriverDetail from "@/pages/Dashboard/Pages/Admin/DriverDetail.vue";
import CreateInvoice from "@/pages/Dashboard/Pages/Admin/CreateInvoice.vue";
import Invoices from "@/pages/Dashboard/Pages/Admin/Invoices.vue";
import InvoiceDetail from "@/pages/Dashboard/Pages/Admin/InvoiceDetail.vue";
import Itineraries from "@/pages/Dashboard/Pages/Admin/Itineraries.vue";
// Old
import Calendar from "@/pages/Dashboard/Pages/Admin/Calendar.vue";
import Charts from "@/pages/Dashboard/Pages/Admin/Charts.vue";
import Widgets from "@/pages/Dashboard/Pages/Admin/Widgets.vue";

import { setMeta } from "./common";

export const admin = {
  path: "",
  name: "Home",
  redirect: "/dashboard",
  component: DashboardLayout,
  children: [
    {
      path: "/itineraries",
      name: "Itineraries",
      components: {default: Itineraries},
      meta: setMeta("Itineraries")
    },
    {
      path: "/reservations",
      name: "Reservations",
      components: { default: Reservations },
      meta: setMeta("Reservations")
    },
    {
      path: "/reservationdetail-:id",
      name: "ReservationDetail",
      components: { default: ReservationDetail },
      meta: setMeta("Reservation Detail")
    },
    {
      path: "/createdriver",
      name: "CreateDriver",
      components: { default: CreateDriver },
      meta: setMeta("Create Driver")
    },
    {
      path: "/drivers",
      name: "Drivers",
      components: { default: Drivers },
      meta: setMeta("Drivers")
    },
    {
      path: "/driverdetail-:id",
      name: "DriverDetail",
      components: { default: DriverDetail },
      meta: setMeta("Driver Detail")
    },
    {
      path: "/createinvoice",
      name: "CreateInvoice",
      components: { default: CreateInvoice },
      meta: setMeta("Create Invoice")
    },
    {
      path: "/invoices",
      name: "Invoices",
      components: { default: Invoices },
      meta: setMeta("Invoices")
    },
    {
      path: "/invoicesdetail-:id",
      name: "InvoiceDetail",
      components: { default: InvoiceDetail },
      meta: setMeta("Invoice Detail")
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      components: { default: Dashboard },
      meta: setMeta("Dashboard")
    },
    {
      path: "/calendar",
      name: "Calendar",
      components: { default: Calendar },
      meta: setMeta("Calendar")
    },
    {
      path: "/charts",
      name: "Charts",
      components: { default: Charts },
      meta: setMeta("Charts")
    },
    {
      path: "/widgets",
      name: "Widgets",
      components: { default: Widgets },
      meta: setMeta("Widgets")
    }
  ],
};
