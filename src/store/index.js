import Vue from "vue";
import Vuex from "vuex";
import admin from "./modules/admin";
import auth from "./modules/auth";
import company from "./modules/company";
import driver from "./modules/driver";
import employee from "./modules/employee";
import loading from "./modules/loading";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    admin,
    auth,
    company,
    driver,
    employee,
    loading,
  },
  strict: process.env.NODE_ENV !== "production"
});
