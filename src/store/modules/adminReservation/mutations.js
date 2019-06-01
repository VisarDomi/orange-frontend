import { SET_ADMIN_RESERVATIONS, SET_ADMIN_RESERVATION } from "./../../mutations.type";

export const mutations = {
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
