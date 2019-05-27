import JwtService from "@/common/jwt.service";
import UserService from "@/common/userstorage.service";
import { SET_AUTH, SET_AUTH_SECOND, PURGE_AUTH } from "../../mutations.type";

export const mutations = {
  [SET_AUTH_SECOND](state, user) {
    state.isAuthenticated = true;
    state.errors = {};
    UserService.saveUser(user);
    state.user = user;
    state.token = JwtService.getToken();
  },
  [SET_AUTH](state, user) {
    state.errors = {};
    JwtService.saveToken(user.token);
    state.token = user.token;
    state.isAuthenticated = true;
    UserService.saveUser(user);
    state.user = user;
  },
  [PURGE_AUTH](state) {
    state.errors = {};
    JwtService.destroyToken();
    state.token = "";
    state.isAuthenticated = false;
    UserService.destroyUser();
    state.user = {};
  }
};
