import { SET_COMPANY_INVOICE, SET_COMPANY_INVOICES } from "../../mutations.type";

export const mutations = {
  [SET_COMPANY_INVOICES](state, invoices) {
    console.log("setting state...");
    state.companyInvoices = invoices;
    console.log("state.invoices is now: ", state.companyInvoices);
  },
  [SET_COMPANY_INVOICE](state, invoice) {
    console.log("setting state...");
    state.companyInvoice = invoice;
    console.log("state.invoice is now: ", state.companyInvoice);
  }
};
