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
  SET_COMPANY_ITINERARY,
  SET_COMPANY_ITINERARYS
} from "../../mutations.type";

export const mutations = {
  [SET_COMPANYS](state, companys) {
    state.companys = companys;
  },
  [SET_COMPANY](state, company) {
    state.company = company;
  },

  [SET_COMPANY_RESERVATIONS](state, reservations) {
    state.companyReservations = reservations;
  },
  [SET_COMPANY_RESERVATION](state, reservation) {
    state.companyReservation = reservation;
  },

  [SET_EMPLOYEE_STEP](state, data) {
    state.companyReservation.name = data.name;
    state.companyReservation.destination = data.destination;
    state.companyReservation.date = data.date;
    state.companyReservation.time = data.time;
    state.companyReservation.status = "unassigned";
    // state.companyReservation.payment_method = data.paymentMethod;
    state.companyReservation.big_luggage = data.bigLuggage;
    state.companyReservation.small_luggage = data.smallLuggage;
    // state.companyReservation.vehicle_type = data.vehicleType;
    state.companyReservation.stops = data.stops;
  },
  [SET_VEHICLE_STEP](state, data) {
    state.companyReservation.vehicle_type = data.vehicleType;
  },
  [SET_PAYMENT_STEP](state, data) {
    state.companyReservation.payment_method = data.paymentMethod;
  },

  [SET_COMPANY_INVOICES](state, invoices) {
    state.companyInvoices = invoices;
  },
  [SET_COMPANY_INVOICE](state, invoice) {
    state.companyInvoice = invoice;
  },

  [SET_COMPANY_ITINERARYS](state, itinerarys) {
    state.companyItinerarys = itinerarys;
  },
  [SET_COMPANY_ITINERARY](state, itinerary) {
    state.companyItinerary = itinerary;
  }
};
