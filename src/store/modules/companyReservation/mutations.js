import { SET_COMPANY_RESERVATIONS, SET_COMPANY_RESERVATION,SET_EMPLOYEE_STEP_MUTATION } from "../../mutations.type";

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
  },
  [SET_EMPLOYEE_STEP_MUTATION](state, data){
    console.log("we got some data on step mutation", data)
    state.companyReservation.destination = data.destination;
    state.companyReservation.date = data.date; 
    state.companyReservation.time = data.time;
    state.companyReservation.bigLuggage = data.bigLuggage; 
    state.companyReservation.smallLuggage = data.smallLuggage;
    console.log("company reservation state now: ", state.companyReservation)
  }
};
