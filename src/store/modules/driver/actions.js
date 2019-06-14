import {
  CREATE_DRIVER,
  GET_DRIVERS,
  GET_DRIVER,
  UPDATE_DRIVER,
  DELETE_DRIVER,
  GET_DRIVER_RESERVATIONS,
  GET_DRIVER_RESERVATION,
  UPDATE_DRIVER_RESERVATION
} from "../../actions.type";
import {
  SET_DRIVERS,
  SET_DRIVER,
  SET_DRIVER_RESERVATIONS,
  SET_DRIVER_RESERVATION
} from "../../mutations.type";
import { DriverService } from "../../services/api";

export const actions = {
  async [CREATE_DRIVER](context, driver) {
    await DriverService.createDriver(driver)
  },

  async [GET_DRIVER](context, payload) {
    const { driverId } = payload;
    await DriverService.getDriver(driverId).then(({ data }) => {
      context.commit(SET_DRIVER, data);
    });
  },

  async [UPDATE_DRIVER](context, payload) {
    const { driverId } = payload;
    delete payload.driverId;
    await DriverService.putDriver(driverId, payload).then(({ data }) => {
      context.commit(SET_DRIVER, data);
    });
  },

  async [DELETE_DRIVER](context, payload) {
    const { driverId } = payload;
    await DriverService.deleteDriver(driverId)
  },

  async [GET_DRIVERS](context, payload) {
    await DriverService.getDrivers().then(({ data }) => {
      context.commit(SET_DRIVERS, data);
    });
  },

  async [GET_DRIVER_RESERVATIONS](context, payload) {
    const { driverId } = payload
    await DriverService.getReservations(driverId).then(({ data }) => {
      context.commit(SET_DRIVER_RESERVATIONS, data);
    });
  },

  async [GET_DRIVER_RESERVATION](context, payload) {
    const { driverId, reservationId } = payload;
    await DriverService.getReservation(driverId, reservationId).then(
      ({ data }) => {
        context.commit(SET_DRIVER_RESERVATION, data);
      }
    );
  },

  async [UPDATE_DRIVER_RESERVATION](context, payload) {
    const { driverId, reservationId, reservationStatus } = payload;
    let reservation = { status: reservationStatus };
    await DriverService.putReservation(
      driverId,
      reservationId,
      reservation
    ).then(({ data }) => {
      context.commit(SET_DRIVER_RESERVATION, data);
    });
  }
};
