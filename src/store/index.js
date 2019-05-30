import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import invoice from "./modules/invoice";
import loading from "./modules/loading";
import profile from "./modules/profile";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    loading,
    profile,
    invoice
  },
  strict: process.env.NODE_ENV !== "production"
});
