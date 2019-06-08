import {
  CREATE_DRIVER,
  GET_DRIVERS,
  GET_DRIVER,
  GET_INCOMING_RESERVATIONS,
  GET_RESERVATION_DETAILS,
  UPDATE_DRIVER_RESERVATION
} from "../../actions.type";
import { SET_DRIVERS, SET_DRIVER, SET_INCOMING_RESERVATIONS, SET_RESERVATION_DETAILS } from "../../mutations.type";
import { DriverService, UserService } from "../../services/api";
import { getUser } from "../../services/userstorage";

export const actions = {
  async [CREATE_DRIVER](context, payload) {
    let user_id = "";
    console.log(payload.email);
    await UserService.createUser({
      email: payload.email,
      password: payload.password
    }).then(({ data }) => {
      user_id = data.id + "";
      return data;
    });
    let driver = {
      full_name: payload.name,
      user_id: user_id
    };
    await DriverService.createDriver(driver).then(
      ({ data }) => {
        return data;
      }
    );
  },

  async [GET_RESERVATION_DETAILS](context, payload) {
    const { reservationId } = payload;
    await DriverService.getReservationDetails(  getUser().role_id,   reservationId  ).then(({ data }) => {
      console.log("setting reservation detail driver state to ", data);
      context.commit(SET_RESERVATION_DETAILS, data);
    });
  },

  async [ UPDATE_DRIVER_RESERVATION ](context, payload){
    const { reservationId, reservationStatus } = payload
    let reservation = {reservationStatus}
    await DriverService.putReservationStatus(  getUser().role_id, reservationId, reservation).then(({ data }) => {
      console.log("setting reservation detail driver state to ", data);
      context.commit(SET_RESERVATION_DETAILS, data);
    });
  },

  async [GET_DRIVERS](context, payload) {
    await DriverService.getDrivers().then(({ data }) => {
      console.log("setting drivers state to ", data);
      context.commit(SET_DRIVERS, data);
    });
  },


  async [GET_INCOMING_RESERVATIONS](context){
    console.log("Getting incoming reservations")
    await DriverService.getIncomingReservations(getUser().role_id).then(({data})=>{
      console.log("setting incoming reservations")
      context.commit(SET_INCOMING_RESERVATIONS, data)
    });
  },

  async [GET_DRIVER](context, payload) {
    const { driverId } = payload;
    await DriverService.getDriver(driverId).then(
      ({ data }) => {
        console.log("setting driver state to ", data);
        context.commit(SET_DRIVER, data);
      }
    );
  }
};
