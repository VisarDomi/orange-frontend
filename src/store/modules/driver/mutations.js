import { SET_DRIVERS, SET_DRIVER } from "../../mutations.type";

export const mutations = {
  [SET_DRIVERS](state, drivers) {
    state.drivers = drivers;
  },
  [SET_DRIVER](state, driver) {
    state.driver = driver;
  }
};
