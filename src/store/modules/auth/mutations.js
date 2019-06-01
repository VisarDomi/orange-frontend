import { getToken, saveToken, destroyToken } from "../../services/jwt";
import { saveUser, destroyUser } from "../../services/userstorage";
import {
  SET_AUTH,
  SET_AUTH_SECOND,
  PURGE_AUTH,
  SET_ROLE
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
  [SET_ROLE](state, param) {
    console.log("role in muations is:", param.role)
    state.role = param.role;
  },
  [SET_GO_BACK](state, param) {
    state.goBack = param.goBack
  }
};
