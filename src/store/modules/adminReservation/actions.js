import {
  GET_ADMIN_RESERVATIONS,
  GET_ADMIN_RESERVATION,
  UPDATE_ADMIN_RESERVATION
} from "../../actions.type";
import {
  SET_ADMIN_RESERVATIONS,
  SET_ADMIN_RESERVATION
} from "../../mutations.type";
import { AdminReservationService } from "@/common/api.service";
import UserStorageService from "@/common/userstorage.service";

export const actions = {
  async [GET_ADMIN_RESERVATIONS](context) {
    const companyId = UserStorageService.getUser().role_id;
    await AdminReservationService.getReservations(companyId).then(
      ({ data }) => {
        context.commit(SET_ADMIN_RESERVATIONS, data);
        console.log("setting reservations", data);
        return data;
      }
    );
  },

  async [GET_ADMIN_RESERVATION](context, payload) {
    const { reservationId } = payload;
    const companyId = UserStorageService.getUser().role_id;
    await AdminReservationService.getReservation(companyId, reservationId).then(
      ({ data }) => {
        context.commit(SET_ADMIN_RESERVATION, data);
        console.log("setting reservation", data);
        return data;
      }
    );
  },

  async [UPDATE_ADMIN_RESERVATION](context, payload) {
    const { reservationId, driverId } = payload;
    let reservation = {
      driver_id: driverId + ""
    };
    await AdminReservationService.putReservation(
      reservationId,
      reservation
    ).then(({ data }) => {
      console.log("Setting invoice data...");
      context.commit(SET_ADMIN_RESERVATION, data);
      return data;
    });
  }
};
