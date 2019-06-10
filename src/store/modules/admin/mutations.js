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
  },
  
  [SET_ADMIN_ITINERARYS](state, itinerarys){
    console.log("setting state...");
    state.adminItinerarys = itinerarys;
    console.log("state.admin itinerary is now: ", state.adminItinerarys);  
  },
  [SET_ADMIN_ITINERARY](state, itinerary){
    console.log("setting state...");
    state.adminItinerary = itinerary;
    console.log("state.admin itinerary is now: ", state.adminItinerary);  
  },

};
