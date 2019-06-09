import {
  SET_ADMIN_INVOICE,
  SET_ADMIN_INVOICES,
  SET_ADMIN_RESERVATIONS,
  SET_ADMIN_RESERVATION
} from "../../mutations.type";

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
  },
  [SET_ADMIN_RESERVATIONS](state, reservations) {
    console.log("setting state...");
    state.adminReservations = reservations;
    console.log("state.adminreservations is now: ", state.adminReservations);
  },
  [SET_ADMIN_RESERVATION](state, reservation) {
    console.log("setting state...");
    state.adminReservation = reservation;
    console.log("state.adminreservation is now: ", state.adminReservation);
  }
};
