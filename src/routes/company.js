import CompanyDashboardLayout from "@/pages/Dashboard/Layout/CompanyDashboardLayout.vue";
import CompanyReservations from "@/pages/Dashboard/CompanyReservations.vue";
import CompanyCreateReservation from "@/pages/Dashboard/CompanyCreateReservation.vue";
import CompanyAddEmployee from "@/pages/Dashboard/CompanyAddEmployee.vue";
import CompanyEmployees from "@/pages/Dashboard/CompanyEmployees.vue";
import CompanyInvoices from "@/pages/Dashboard/CompanyInvoices.vue";
import CompanyInvoicePreview from "@/pages/Dashboard/CompanyInvoicePreview.vue";

export const company = {
  path: "/company/",
  component: CompanyDashboardLayout,
  children: [
    {
      path: "reservations",
      name: "CompanyReservations",
      components: { default: CompanyReservations },
      meta: setMeta("CompanyReservations")
    },
    {
      path: "createreservation",
      name: "CompanyCreateReservation",
      components: { default: CompanyCreateReservation },
      meta: setMeta("CompanyCreateReservation")
    },
    {
      path: "addemployee",
      name: "CompanyAddEmployee",
      components: { default: CompanyAddEmployee },
      meta: setMeta("CompanyAddEmployee")
    },
    {
      path: "employees",
      name: "CompanyEmployees",
      components: { default: CompanyEmployees },
      meta: setMeta("CompanyEmployees")
    },
    {
      path: "invoices",
      name: "CompanyInvoices",
      components: { default: CompanyInvoices },
      meta: setMeta("CompanyInvoices")
    },
    {
      path: "invoicepreview",
      name: "CompanyInvoicePreview",
      components: { default: CompanyInvoicePreview },
      meta: setMeta("CompanyInvoicePreview")
    }
  ]
};
