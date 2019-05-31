import CompanyDashboardLayout from "@/pages/Dashboard/Layout/CompanyDashboardLayout.vue";
import CompanyCreateReservation from "@/pages/Dashboard/CompanyCreateReservation.vue";
import CompanyReservations from "@/pages/Dashboard/CompanyReservations.vue";
import CompanyReservationDetail from "@/pages/Dashboard/CompanyReservationDetail.vue";
import CompanyCreateEmployee from "@/pages/Dashboard/CompanyCreateEmployee.vue";
import CompanyEmployees from "@/pages/Dashboard/CompanyEmployees.vue";
import CompanyEmployeeDetail from "@/pages/Dashboard/CompanyEmployeeDetail.vue";
import CompanyInvoices from "@/pages/Dashboard/CompanyInvoices.vue";
import CompanyInvoiceDetail from "@/pages/Dashboard/CompanyInvoiceDetail.vue";
import CompanyInvoicePreview from "@/pages/Dashboard/CompanyInvoicePreview.vue";
import { setMeta } from './common';

export const company = {
  path: "/company",
  component: CompanyDashboardLayout,
  children: [
    {
      path: "/company-createreservation",
      name: "CompanyCreateReservation",
      components: { default: CompanyCreateReservation },
      meta: setMeta("Company Create Reservation")
    },
    {
      path: "/company-reservations",
      name: "CompanyReservations",
      components: { default: CompanyReservations },
      meta: setMeta("Company Reservations")
    },
    {
      path: "/company-reservationdetail-:id",
      name: "CompanyReservationDetail",
      components: { default: CompanyReservationDetail},
      meta: setMeta("Company Reservation Detail")
    },
    {
      path: "/company-createemployee",
      name: "CompanyCreateEmployee",
      components: { default: CompanyCreateEmployee },
      meta: setMeta("Company Create Employee")
    },
    {
      path: "/company-employees",
      name: "CompanyEmployees",
      components: { default: CompanyEmployees },
      meta: setMeta("Company Employees")
    },
    {
      path: "/company-employeedetail-:id",
      name: "CompanyEmployeeDetail",
      components: { default: CompanyEmployeeDetail },
      meta: setMeta("Company Employee Detail")
    },
    {
      path: "/company-invoices",
      name: "CompanyInvoices",
      components: { default: CompanyInvoices },
      meta: setMeta("Company Invoices")
    },
    {
      path: "/company-invoicedetail-:id",
      name: "CompanyInvoiceDetail",
      components: { default: CompanyInvoiceDetail },
      meta: setMeta("Company Invoice Detail")
    },
    {
      path: "/company-invoicepreview",
      name: "CompanyInvoicePreview",
      components: { default: CompanyInvoicePreview },
      meta: setMeta("Company Invoice Preview")
    }
  ]
};
