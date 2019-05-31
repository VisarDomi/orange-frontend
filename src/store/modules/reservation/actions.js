import {
  CREATE_RESERVATION,
  GET_RESERVATIONS,
  GET_RESERVATION
} from "../../actions.type";
import { SET_RESERVATIONS, SET_RESERVATION } from "../../mutations.type";
import { ReservationService } from "@/common/api.service";
import UserService from "@/common/userstorage.service";

export const actions = {
  async [CREATE_RESERVATION](context, payload) {
    const { reservation } = payload;
    console.log(payload);
    let companyId = UserService.getUser().role_id;
    await ReservationService.createReservation(payload, companyId).then(
      ({ data }) => {
        return data;
      }
    );
  },
  async [GET_RESERVATIONS](context) {
    const companyId = UserService.getUser().role_id;
    await ReservationService.getReservations(companyId).then(({ data }) => {
      context.commit(SET_RESERVATIONS, data);
      console.log("setting reservations", data);
      return data;
    });
  },
  async [GET_RESERVATION](context, payload) {
    const companyId = UserService.getUser().role_id;
    const { reservationId } = payload;
    await ReservationService.getReservation(companyId, reservationId).then(
      ({ data }) => {
        context.commit(SET_RESERVATION, data);
        console.log("setting reservation", data);
        return data;
      }
    );
  }
};
