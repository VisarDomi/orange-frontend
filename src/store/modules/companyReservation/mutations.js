import { SET_COMPANY_RESERVATIONS, SET_COMPANY_RESERVATION } from "../../mutations.type";

export const mutations = {
  [SET_COMPANY_RESERVATIONS](state, reservations) {
    console.log("setting state...");
    state.companyReservations = reservations;
    console.log("state.reservations is now: ", state.companyReservations);
  },
  [SET_COMPANY_RESERVATION](state, reservation) {
    console.log("setting state...");
    state.companyReservation = reservation;
    console.log("state.reservations is now: ", state.companyReservations);
  }
};
