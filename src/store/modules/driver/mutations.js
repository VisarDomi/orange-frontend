import {
  SET_DRIVERS,
  SET_DRIVER,
  SET_DRIVER_RESERVATIONS,
  SET_DRIVER_RESERVATION
} from "../../mutations.type";

export const mutations = {
  [SET_DRIVERS](state, drivers) {
    state.drivers = drivers;
  },
  [SET_DRIVER](state, driver) {
    state.driver = driver;
  },
  [SET_DRIVER_RESERVATIONS](state, data) {
    state.driverReservations = data;
    console.log("state.incomingReservations ", state.driverReservations);
  },
  [SET_DRIVER_RESERVATION](state, data) {
    state.driverReservation = data;
  }
};
