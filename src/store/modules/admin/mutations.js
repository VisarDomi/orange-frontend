import {
  SET_ADMIN_INVOICE,
  SET_ADMIN_INVOICES,
  SET_ADMIN_RESERVATIONS,
  SET_ADMIN_RESERVATION,
  SET_ADMIN_ITINERARYS,
  SET_ADMIN_ITINERARY
} from "../../mutations.type";

export const mutations = {
  [SET_ADMIN_INVOICES](state, invoices) {
    state.adminInvoices = invoices;
  },
  [SET_ADMIN_INVOICE](state, invoice) {
    state.adminInvoice = invoice;
  },
  [SET_ADMIN_RESERVATIONS](state, reservations) {
    state.adminReservations = reservations;
  },
  [SET_ADMIN_RESERVATION](state, reservation) {
    state.adminReservation = reservation;
  },

  [SET_ADMIN_ITINERARYS](state, itinerarys) {
    state.adminItinerarys = itinerarys;
  },
  [SET_ADMIN_ITINERARY](state, itinerary) {
    state.adminItinerary = itinerary;
  }
};
