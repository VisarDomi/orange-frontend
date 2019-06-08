import {
  CREATE_COMPANY_RESERVATION,
  GET_COMPANY_RESERVATIONS,
  GET_COMPANY_RESERVATION,
  UPDATE_EMPLOYEE_STEP,
  UPDATE_VEHICLE_STEP,
  UPDATE_PAYMENT_STEP
} from "../../actions.type";
import { 
  SET_COMPANY_RESERVATIONS, 
  SET_COMPANY_RESERVATION, 
  SET_EMPLOYEE_STEP, 
  SET_PAYMENT_STEP, 
  SET_VEHICLE_STEP 
} from "../../mutations.type";

import { CompanyReservationService } from "../../services/api";
import { getUser } from "../../services/userstorage";

export const actions = {

  async [UPDATE_EMPLOYEE_STEP](context, payload){
    console.log("action employees pyalod is: ", payload)
    context.commit(SET_EMPLOYEE_STEP, payload);
  },

  async [UPDATE_VEHICLE_STEP](context, payload){
    console.log("action vehicle payload is: ", payload)
    context.commit(SET_VEHICLE_STEP, payload);
  },

  async [UPDATE_PAYMENT_STEP](context, payload){
    console.log("action payment payload is: ", payload)
    context.commit(SET_PAYMENT_STEP, payload);
  },

  async [CREATE_COMPANY_RESERVATION](context, payload) {
    // const { reservation } = payload; //not needed, left for artifact reasons
    console.log("paylaod in action of create reservaton: ", payload);
    let companyId = getUser().role_id;
    await CompanyReservationService.createReservation(companyId, payload).then(
      ({ data }) => {
        return data;
      }
    );
  },

  async [GET_COMPANY_RESERVATIONS](context) {
    const companyId = getUser().role_id;
    await CompanyReservationService.getReservations(companyId).then(({ data }) => {
      context.commit(SET_COMPANY_RESERVATIONS, data);
      console.log("setting reservations", data);
      return data;
    });
  },

  async [GET_COMPANY_RESERVATION](context, payload) {
    const companyId = getUser().role_id;
    const { reservationId } = payload;
    await CompanyReservationService.getReservation(companyId, reservationId).then(
      ({ data }) => {
        context.commit(SET_COMPANY_RESERVATION, data);
        console.log("setting reservation", data);
        return data;
      }
    );
  }
};
