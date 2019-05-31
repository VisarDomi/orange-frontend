import CompanyDashboardLayout from "@/pages/Dashboard/Layout/CompanyDashboardLayout.vue";
import CompanyReservations from "@/pages/Dashboard/CompanyReservations.vue";
import CompanyReservationDetail from "@/pages/Dashboard/CompanyReservationDetail.vue";
import CompanyCreateReservation from "@/pages/Dashboard/CompanyCreateReservation.vue";
import CompanyAddEmployee from "@/pages/Dashboard/CompanyAddEmployee.vue";
import CompanyEmployees from "@/pages/Dashboard/CompanyEmployees.vue";
import CompanyInvoices from "@/pages/Dashboard/CompanyInvoices.vue";
import CompanyInvoicePreview from "@/pages/Dashboard/CompanyInvoicePreview.vue";
import { setMeta } from './common';

export const company = {
  path: "/company",
  component: CompanyDashboardLayout,
  children: [
    {
      path: "/company/reservations",
      name: "CompanyReservations",
      components: { default: CompanyReservations },
      meta: setMeta("Company Reservations")
    },
    {
      path: "/company/reservationdetail/:id",
      name: "CompanyReservationDetail",
      components: { default: CompanyReservationDetail},
      meta: setMeta("Company Reservation Detail")
    },
    {
      path: "/company/createreservation",
      name: "CompanyCreateReservation",
      components: { default: CompanyCreateReservation },
      meta: setMeta("Company Create Reservation")
    },
    {
      path: "/company/addemployee",
      name: "CompanyAddEmployee",
      components: { default: CompanyAddEmployee },
      meta: setMeta("Company Add Employee")
    },
    {
      path: "/company/employees",
      name: "CompanyEmployees",
      components: { default: CompanyEmployees },
      meta: setMeta("Company Employees")
    },
    {
      path: "/company/invoices",
      name: "CompanyInvoices",
      components: { default: CompanyInvoices },
      meta: setMeta("Company Invoices")
    },
    {
      path: "/company/invoicepreview",
      name: "CompanyInvoicePreview",
      components: { default: CompanyInvoicePreview },
      meta: setMeta("Company Invoice Preview")
    }
  ]
};
