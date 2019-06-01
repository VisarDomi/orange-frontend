import { SET_EMPLOYEE_RESERVATION, SET_EMPLOYEE_RESERVATIONS } from "../../mutations.type";

export const mutations = {
  [SET_EMPLOYEE_RESERVATION](state, reservation) {
    console.log("setting state...");
    state.employeeReservation = reservation;
    console.log("state.reservations is now: ", state.employeeReservation);
  },
  [SET_EMPLOYEE_RESERVATIONS](state, reservations) {
    console.log("setting state...");
    state.employeeReservations = reservations;
    console.log("state.reservations is now: ", state.employeeReservations);
  }
};
