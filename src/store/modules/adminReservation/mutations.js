import { SET_ADMIN_RESERVATIONS, SET_ADMIN_RESERVATION } from "../../mutations.type";

export const mutations = {
  [SET_ADMIN_RESERVATIONS](state, reservations) {
    console.log("setting state...");
    state.reservations = reservations;
    console.log("state.reservations is now: ", state.reservations);
  },
  [SET_ADMIN_RESERVATION](state, reservation) {
    console.log("setting state...");
    state.reservation = reservation;
    console.log("state.reservations is now: ", state.reservations);
  }
};
