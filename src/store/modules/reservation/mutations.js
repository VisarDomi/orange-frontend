import { SET_RESERVATIONS, SET_RESERVATION } from "../../mutations.type";

export const mutations = {
  [SET_RESERVATIONS](state, reservations) {
    console.log("setting state...");
    state.reservations = reservations;
    console.log("state.reservations is now: ", state.reservations);
  },
  [SET_RESERVATION](state, reservation) {
    console.log("setting state...");
    state.reservation = reservation;
    console.log("state.reservations is now: ", state.reservations);
  }
};
