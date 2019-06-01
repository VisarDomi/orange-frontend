import { ApiService } from "../../services/api";
import { LOGIN, LOGOUT, REGISTER, CHECK_AUTH } from "../../actions.type";
import {
  SET_AUTH,
  SET_AUTH_SECOND,
  PURGE_AUTH,
  START_LOADING,
  STOP_LOADING
} from "../../mutations.type";
import { getToken } from "../../services/jwt";
import { getUser } from "../../services/userstorage";

export const actions = {
  async [LOGIN](context, credentials) {
    console.log("outside post auth credentials", credentials);
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
    if (getToken()) {
      ApiService.setHeader();
      context.commit(SET_AUTH_SECOND, getUser());
    } else {
      context.commit(PURGE_AUTH);
    }
  }
};
