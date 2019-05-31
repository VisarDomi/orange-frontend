import { SET_INVOICE, SET_INVOICES } from "../../mutations.type";

export const mutations = {
  [SET_INVOICES](state, invoices) {
    console.log("setting state...");
    state.invoices = invoices;
    console.log("state.invoices is now: ", state.invoices);
  },
  [SET_INVOICE](state, invoice) {
    console.log("setting state...");
    state.invoice = invoice;
    console.log("state.invoice is now: ", state.invoice);
  }
};
