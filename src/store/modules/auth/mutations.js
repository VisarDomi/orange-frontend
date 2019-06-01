import JwtService from "./../../services/jwt.service";
import UserStorageService from "./../../services/userstorage.service";
import {
  SET_AUTH,
  SET_AUTH_SECOND,
  PURGE_AUTH,
  SET_ROLE
} from "./../../mutations.type";

export const mutations = {
  [SET_AUTH_SECOND](state, user) {
    state.isAuthenticated = true;
    state.errors = {};
    UserStorageService.saveUser(user);
    state.user = user;
    state.token = JwtService.getToken();
  },
  [SET_AUTH](state, user) {
    state.errors = {};
    JwtService.saveToken(user.token);
    state.token = user.token;
    state.isAuthenticated = true;
    UserStorageService.saveUser(user);
    state.user = user;
  },
  [PURGE_AUTH](state) {
    state.errors = {};
    JwtService.destroyToken();
    state.token = "";
    state.isAuthenticated = false;
    UserStorageService.destroyUser();
    state.user = {};
  },
  [SET_ROLE](state, param) {
    console.log("role in muations is:", param.role)
    state.role = param.role;
  }
};
