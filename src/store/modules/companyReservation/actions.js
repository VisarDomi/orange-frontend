import {
  CREATE_COMPANY_RESERVATION,
  GET_COMPANY_RESERVATIONS,
  GET_COMPANY_RESERVATION
} from "../../actions.type";
import { SET_COMPANY_RESERVATIONS, SET_COMPANY_RESERVATION } from "../../mutations.type";
import { CompanyReservationService } from "../../services/api";
import { getUser } from "../../services/userstorage";

export const actions = {
  async [CREATE_COMPANY_RESERVATION](context, payload) {
    const { reservation } = payload;
    console.log(payload);
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
