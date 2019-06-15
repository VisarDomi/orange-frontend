import CompanyDashboardLayout from "@/pages/Dashboard/Layout/CompanyDashboardLayout.vue";

// Company pages
import CompanyWizard from "@/pages/Dashboard/Pages/Company/CompanyWizard.vue";
import CompanyReservations from "@/pages/Dashboard/Pages/Company/CompanyReservations.vue";
import CompanyReservationDetail from "@/pages/Dashboard/Pages/Company/CompanyReservationDetail.vue";
import CompanyCreateEmployee from "@/pages/Dashboard/Pages/Company/CompanyCreateEmployee.vue";
import CompanyEmployees from "@/pages/Dashboard/Pages/Company/CompanyEmployees.vue";
import CompanyEmployeeDetail from "@/pages/Dashboard/Pages/Company/CompanyEmployeeDetail.vue";
import CompanyInvoices from "@/pages/Dashboard/Pages/Company/CompanyInvoices.vue";
import CompanyInvoiceDetail from "@/pages/Dashboard/Pages/Company/CompanyInvoiceDetail.vue";
import CompanySecretaries from "@/pages/Dashboard/Pages/Company/CompanySecretarys.vue";
import CompanySecretaryDetail from "@/pages/Dashboard/Pages/Company/CompanySecretaryDetail.vue";
import CompanyCreateSecretary from "@/pages/Dashboard/Pages/Company/CompanyCreateSecretary.vue";
import { setMeta } from './common';

export const company = {
  path: "/company",
  component: CompanyDashboardLayout,
  children: [
    {
      path: "/company-createreservation",
      name: "CompanyWizard",
      components: { default: CompanyWizard },
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
      path: "/company-secretaries",
      name: "CompanySecretaries",
      components: { default: CompanySecretaries },
      meta: setMeta("Company Secretaries")
    },
    {
      path: "/company-secretarydetail-:id",
      name: "CompanySecretaryDetail",
      components: { default: CompanySecretaryDetail },
      meta: setMeta("Company Secretary Detail")
    },
    {
      path: "/company-createsecretary",
      name: "CompanyCreateSecretary",
      components: { default: CompanyCreateSecretary },
      meta: setMeta("Company Create Secretary")
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
    }
  ]
};
