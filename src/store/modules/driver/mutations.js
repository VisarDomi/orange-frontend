import { SET_DRIVERS, SET_DRIVER, SET_INCOMING_RESERVATIONS, SET_RESERVATION_DETAILS } from "../../mutations.type";

export const mutations = {
  [SET_DRIVERS](state, drivers) {
    state.drivers = drivers;
  },
  [SET_DRIVER](state, driver) {
    state.driver = driver;
  },
  [SET_INCOMING_RESERVATIONS](state, data) {

    state.incomingReservations = data;
    console.log("state.incomingReservations ", state.incomingReservations)
  },
  [SET_RESERVATION_DETAILS](state, data){
    state.reservationDetails = data;
  }
};
