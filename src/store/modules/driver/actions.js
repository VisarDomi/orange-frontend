import {
  CREATE_DRIVER,
  GET_DRIVERS,
  GET_DRIVER
} from "../../actions.type";
import { SET_DRIVERS, SET_DRIVER } from "../../mutations.type";
import { DriverService, UserService } from "@/common/api.service";
import UserStorageService from "@/common/userstorage.service";

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

  async [GET_DRIVERS](context, payload) {
    let admin_id = UserStorageService.getUser().role_id;
    await DriverService.getDrivers().then(({ data }) => {
      console.log("setting driver state to ", data);
      context.commit(SET_DRIVERS, data);
    });
  },

  async [GET_DRIVER](context, payload) {
    const { driver_id } = payload;
    await DriverService.getDriver(driver_id).then(
      ({ data }) => {
        console.log("setting driver state to ", data);
        context.commit(SET_DRIVER, data);
      }
    );
  }
};
