import { getToken, saveToken, destroyToken } from "../../services/jwt";
import { saveUser, destroyUser } from "../../services/userstorage";
import {
  SET_AUTH,
  SET_AUTH_SECOND,
  PURGE_AUTH,
  SET_ROLE,
  SET_GO_BACK,
  SET_BAD_EMAIL,
} from "../../mutations.type";

export const mutations = {
  [SET_AUTH_SECOND](state, user) {
    state.isAuthenticated = true;
    state.errors = {};
    saveUser(user);
    state.user = user;
    state.token = getToken();
  },
  [SET_AUTH](state, user) {
    state.errors = {};
    saveToken(user.token);
    state.token = user.token;
    state.isAuthenticated = true;
    saveUser(user);
    state.user = user;
  },
  [PURGE_AUTH](state) {
    state.errors = {};
    destroyToken();
    state.token = "";
    state.isAuthenticated = false;
    destroyUser();
    state.user = {};
  },
  [SET_ROLE](state, payload) {
    console.log("role in muations is:", payload.role)
    state.role = payload.role;
  },
  [SET_GO_BACK](state, payload) {
    state.goBack = payload.goBack
  },
  [SET_BAD_EMAIL](state, payload) {
    state.badEmail = payload.badEmail
  }
};
