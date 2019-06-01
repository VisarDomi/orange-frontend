import { SET_ADMIN_INVOICE, SET_ADMIN_INVOICES } from "./../../mutations.type";

export const mutations = {
  [SET_ADMIN_INVOICES](state, invoices) {
    console.log("setting state...");
    state.adminInvoices = invoices;
    console.log("state.invoices is now: ", state.adminInvoices);
  },
  [SET_ADMIN_INVOICE](state, invoice) {
    console.log("setting state...");
    state.adminInvoice = invoice;
    console.log("state.invoice is now: ", state.adminInvoice);
  }
};
