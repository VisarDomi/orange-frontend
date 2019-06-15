import {
  SET_SECRETARYS,
  SET_SECRETARY,
  SET_SECRETARY_RESERVATIONS,
  SET_SECRETARY_RESERVATION
} from "../../mutations.type";

export const mutations = {
  [SET_SECRETARYS](state, secretarys) {
    state.secretarys = secretarys;
  },
  [SET_SECRETARY](state, secretary) {
    state.secretary = secretary;
  },
  [SET_SECRETARY_RESERVATIONS](state, data) {
    state.secretaryReservations = data;
    console.log("state.incomingReservations ", state.secretaryReservations);
  },
  [SET_SECRETARY_RESERVATION](state, data) {
    state.secretaryReservation = data;
  }
};
