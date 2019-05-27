import { ApiService } from "@/common/api.service";
import { LOGIN, LOGOUT, REGISTER, CHECK_AUTH } from "../../actions.type";
import {
  SET_AUTH,
  SET_AUTH_SECOND,
  PURGE_AUTH,
  PURGE_APPLICATION,
  START_LOADING,
  STOP_LOADING
} from "../../mutations.type";
import JwtService from "@/common/jwt.service";
import UserService from "@/common/userstorage.service";

export const actions = {
  async [LOGIN](context, credentials) {
    console.log("outside post", credentials);
    context.commit(START_LOADING);
    await ApiService.login("auth/login", { auth: credentials }).then(res => {
      if (res.status == 200) {
        context.commit(SET_AUTH, res.data);
      }
    });
    context.commit(STOP_LOADING);
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
    context.commit(PURGE_APPLICATION);
  },
  async [REGISTER](context, credentials) {
    context.commit(START_LOADING);
    await ApiService.post("user", credentials).then(res => {
      if (res.status == 200) {
        context.commit(SET_AUTH, res.data);
      }
    });
    context.commit(STOP_LOADING);
  },
  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      context.commit(SET_AUTH_SECOND, UserService.getUser());
    } else {
      context.commit(PURGE_AUTH);
    }
  }
};
