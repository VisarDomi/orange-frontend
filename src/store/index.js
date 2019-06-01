import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import invoice from "./modules/invoice";
import loading from "./modules/loading";
import employee from "./modules/employee";
import reservation from "./modules/reservation";
import driver from "./modules/driver";
import adminReservation from "./modules/adminReservation";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    loading,
    invoice,
    employee,
    reservation,
    driver,
    adminReservation
  },
  strict: process.env.NODE_ENV !== "production"
});
