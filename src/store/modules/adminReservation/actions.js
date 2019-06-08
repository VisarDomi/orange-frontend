import {
  GET_ADMIN_RESERVATIONS,
  GET_ADMIN_RESERVATION,
  UPDATE_ADMIN_RESERVATION,
  GET_DRIVER
} from "../../actions.type";
import {
  SET_ADMIN_RESERVATIONS,
  SET_ADMIN_RESERVATION
} from "../../mutations.type";
import { AdminService } from "../../services/api";

export const actions = {
  async [GET_ADMIN_RESERVATIONS](context) {
    await AdminService.getReservations().then(({ data }) => {
      context.commit(SET_ADMIN_RESERVATIONS, data);
      console.log("setting reservations", data);
      return data;
    });
  },

  async [GET_ADMIN_RESERVATION](context, payload) {
    const { reservationId } = payload;
    await AdminService.getReservation(reservationId).then(
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
    await AdminService.putReservation(
      reservationId,
      reservation
    ).then(({ data }) => {
      console.log("Setting invoice data...");
      context.commit(SET_ADMIN_RESERVATION, data);
      context.dispatch(GET_DRIVER, { driverId });
      return data;
    });
  }
};
