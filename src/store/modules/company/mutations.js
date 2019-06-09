import {
  SET_COMPANYS,
  SET_COMPANY,
  SET_COMPANY_RESERVATIONS,
  SET_COMPANY_RESERVATION,
  SET_EMPLOYEE_STEP,
  SET_VEHICLE_STEP,
  SET_PAYMENT_STEP,
  SET_COMPANY_INVOICE,
  SET_COMPANY_INVOICES,
} from "../../mutations.type";

export const mutations = {
  [SET_COMPANYS](state, companys) {
    state.companys = companys;
  },
  [SET_COMPANY](state, company) {
    state.company = company;
  },
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
  [SET_EMPLOYEE_STEP](state, data) {
    console.log("we got some data on step employee mutation", data);
    state.companyReservation.code = data.code;
    state.companyReservation.destination = data.destination;
    state.companyReservation.date = data.date;
    state.companyReservation.time = data.time;
    state.companyReservation.stops = data.stops;
    state.companyReservation.big_luggage = data.bigLuggage;
    state.companyReservation.small_luggage = data.smallLuggage;
    console.log("company reservation state now: ", state.companyReservation);
  },
  [SET_VEHICLE_STEP](state, data) {
    console.log("we got some data on step vehicle mutation", data);
    state.companyReservation.vehicle_type = data.vehicleType;
    console.log("company reservation state now: ", state.companyReservation);
  },
  [SET_PAYMENT_STEP](state, data) {
    console.log("we got some data on step payment mutation", data);
    state.companyReservation.payment_method = data.paymentMethod;
    console.log("company reservation state now: ", state.companyReservation);
  },
  [SET_COMPANY_INVOICES](state, invoices) {
    console.log("setting state...");
    state.companyInvoices = invoices;
    console.log("state.invoices is now: ", state.companyInvoices);
  },
  [SET_COMPANY_INVOICE](state, invoice) {
    console.log("setting state...");
    state.companyInvoice = invoice;
    console.log("state.invoice is now: ", state.companyInvoice);
  },
};
