import DashboardLayout from "@/pages/Dashboard/Layout/DashboardLayout.vue";

// Dashboard pages
import Dashboard from "@/pages/Dashboard/Dashboard.vue";
import Reservations from "@/pages/Dashboard/Reservations.vue";
import CreateDriver from "@/pages/Dashboard/Pages/CreateDriver.vue";
import Drivers from "@/pages/Dashboard/Drivers.vue";
import DriverDetail from "@/pages/Dashboard/DriverDetail.vue";
import CreateInvoice from "@/pages/Dashboard/CreateInvoice.vue";
import Invoices from "@/pages/Dashboard/Invoices.vue";
import InvoiceDetail from "@/pages/Dashboard/InvoiceDetail.vue";
import InvoicePreview from "@/pages/Dashboard/InvoicePreview.vue";
import ReservationDetail from "@/pages/Dashboard/ReservationDetail.vue";
// Calendar
import Calendar from "@/pages/Dashboard/Calendar.vue";
// Charts
import Charts from "@/pages/Dashboard/Charts.vue";
import Widgets from "@/pages/Dashboard/Widgets.vue";

import { setMeta } from "./common";

export const admin = {
  path: "",
  name: "Home",
  redirect: "/dashboard",
  component: DashboardLayout,
  children: [
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
      path: "/invoicesdetail:-id",
      name: "InvoiceDetail",
      components: { default: InvoiceDetail },
      meta: setMeta("Invoice Detail")
    },
    {
      path: "/invoicepreview",
      name: "InvoicePreview",
      components: { default: InvoicePreview },
      meta: setMeta("Invoice Preview")
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
  meta: setMeta("Home", true)
};
