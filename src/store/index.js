import Vue from "vue";
import Vuex from "vuex";
import adminInvoice from "./modules/adminInvoice";
import adminReservation from "./modules/adminReservation";
import auth from "./modules/auth";
import company from "./modules/company";
import companyInvoice from "./modules/companyInvoice";
import companyReservation from "./modules/companyReservation";
import driver from "./modules/driver";
import employee from "./modules/employee";
import employeeReservation from "./modules/employeeReservation";
import loading from "./modules/loading";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    adminInvoice,
    adminReservation,
    auth,
    company,
    companyInvoice,
    companyReservation,
    driver,
    employee,
    employeeReservation,
    loading,
  },
  strict: process.env.NODE_ENV !== "production"
});
