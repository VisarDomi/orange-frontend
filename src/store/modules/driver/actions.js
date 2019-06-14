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
import { getUser } from "../../services/userstorage";

export const actions = {
  async [CREATE_DRIVER](context, driver) {
    console.log("driver:", driver)
    await DriverService.createDriver(driver).then(({ data }) => {
      console.log("create driver return data", data)
      return data;
    });
  },

  async [GET_DRIVER](context, payload) {
    const { driverId } = payload;
    await DriverService.getDriver(driverId).then(({ data }) => {
      console.log("setting driver state to ", data);
      context.commit(SET_DRIVER, data);
    });
  },

  async [UPDATE_DRIVER](context, payload) {
    const { driverId } = payload;
    delete payload.driverId
    await DriverService.putDriver(driverId, payload).then(({data}) =>{
      console.log("setting driver data...");
      context.commit(SET_DRIVER, data);
      return data
    });
  },

  async [DELETE_DRIVER](context, payload){
    const{id} = payload;
    await DriverService.deleteDriver(id).then(({data}) => {
      console.log("deleting driver data...");
      // context.commit(SET_DRIVER, data);
      // return data;
    })
  },

  async [GET_DRIVERS](context, payload) {
    await DriverService.getDrivers().then(({ data }) => {
      console.log("setting drivers state to ", data);
      context.commit(SET_DRIVERS, data);
    });
  },

  async [GET_DRIVER_RESERVATIONS](context) {
    console.log("Getting incoming reservations");
    await DriverService.getReservations(getUser().role_id).then(({ data }) => {
      console.log("setting incoming reservations");
      context.commit(SET_DRIVER_RESERVATIONS, data);
    });
  },

  async [GET_DRIVER_RESERVATION](context, payload) {
    const { reservationId } = payload;
    await DriverService.getReservation(getUser().role_id, reservationId).then(
      ({ data }) => {
        console.log("setting reservation detail driver state to ", data);
        context.commit(SET_DRIVER_RESERVATION, data);
      }
    );
  },

  async [UPDATE_DRIVER_RESERVATION](context, payload) {
    const { reservationId, reservationStatus } = payload;
    let reservation = { status: reservationStatus };
    await DriverService.putReservation(
      getUser().role_id,
      reservationId,
      reservation
    ).then(({ data }) => {
      console.log("setting reservation detail driver state to ", data);
      context.commit(SET_DRIVER_RESERVATION, data);
    });
  }
};
