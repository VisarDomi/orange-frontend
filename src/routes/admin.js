const DashboardLayout = () => import("@/pages/Dashboard/Layout/DashboardLayout.vue");

// Admin pages
const Dashboard = () => import("@/pages/Dashboard/Pages/Admin/Dashboard.vue");
const Reservations = () => import("@/pages/Dashboard/Pages/Admin/Reservations.vue");
const ReservationDetail = () => import("@/pages/Dashboard/Pages/Admin/ReservationDetail.vue");
const CreateDriver = () => import("@/pages/Dashboard/Pages/Admin/CreateDriver.vue");
const Drivers = () => import("@/pages/Dashboard/Pages/Admin/Drivers.vue");
const DriverDetail = () => import("@/pages/Dashboard/Pages/Admin/DriverDetail.vue");
const CreateInvoice = () => import("@/pages/Dashboard/Pages/Admin/CreateInvoice.vue");
const Invoices = () => import("@/pages/Dashboard/Pages/Admin/Invoices.vue");
const InvoiceDetail = () => import("@/pages/Dashboard/Pages/Admin/InvoiceDetail.vue");
const ItineraryDetail = () => import("@/pages/Dashboard/Pages/Admin/ItineraryDetail.vue");
const Itineraries = () => import("@/pages/Dashboard/Pages/Admin/Itineraries.vue");
const Companies = () => import("@/pages/Dashboard/Pages/Admin/Companies.vue");
const CompanyDetail = () => import("@/pages/Dashboard/Pages/Admin/CompanyDetail.vue");
const CreateCompany = () => import("@/pages/Dashboard/Pages/Admin/CreateCompany.vue");
// Old
const Calendar = () => import("@/pages/Dashboard/Pages/Admin/Calendar.vue");
const Charts = () => import("@/pages/Dashboard/Pages/Admin/Charts.vue");
const Widgets = () => import("@/pages/Dashboard/Pages/Admin/Widgets.vue");

import { setMeta } from "./common";

export const admin = {
  path: "",
  name: "Home",
  redirect: "/reservations",
  component: DashboardLayout,
  children: [
    {
      path: "/createcompany",
      name: "CreateCompany",
      components: { default: CreateCompany },
      meta: setMeta("Create Company")
    },
    {
      path: "/companies",
      name: "Companies",
      components: {default : Companies },
      meta: setMeta("Companies")
    },
    {
      path: "/companydetail-:id",
      name: "CompanyDetail",
      components: { default: CompanyDetail },
      meta: setMeta("Company Detail")
    },
    {
      path: "/itinerarydetail-:id",
      name: "ItineraryDetail",
      components: {default: ItineraryDetail},
      meta: setMeta("ItineraryDetail")
    },
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
      path: "/invoicedetail-:id",
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
