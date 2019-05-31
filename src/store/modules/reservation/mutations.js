import { SET_RESERVATIONS } from "../../mutations.type";

export const mutations = {
  [SET_RESERVATIONS](state, reservations) {
    console.log("setting state...");
    state.reservations = reservations;
    console.log("state.reservations is now: ", state.reservations);
  }
};
