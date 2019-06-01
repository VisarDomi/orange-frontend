import { SET_EMPLOYEE_RESERVATION } from "../../mutations.type";

export const mutations = {
  [SET_EMPLOYEE_RESERVATION](state, reservation) {
    console.log("setting state...");
    state.employeeReservation = reservation;
    console.log("state.reservations is now: ", state.employeeReservations);
  }
};
