import { SET_INVOICE } from "../../mutations.type";

export const mutations = {
  [SET_INVOICE](state, invoice) {
      console.log("setting state...")
    state.invoice = invoice;
    console.log("state.invoice is now: ", state.invoice)
  }
};
