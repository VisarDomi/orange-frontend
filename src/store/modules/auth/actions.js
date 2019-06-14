import { ApiService } from "../../services/api";
import { LOGIN, LOGOUT, REGISTER, CHECK_AUTH } from "../../actions.type";
import {
  SET_AUTH,
  SET_AUTH_SECOND,
  PURGE_AUTH,
  START_LOADING,
  STOP_LOADING,
  SET_GO_BACK,
  SET_BAD_EMAIL
} from "../../mutations.type";
import { getToken } from "../../services/jwt";
import { getUser } from "../../services/userstorage";

export const actions = {
  async [LOGIN](context, payload) {
    console.log("outside post auth payload", payload);
    const { username, password, role } = payload;
    const credentials = { username, password };
    context.commit(START_LOADING);
    let body = { role };
    await ApiService.login("auth/login", body, { auth: credentials })
      .then(res => {
        if (res.status == 200) {
          context.commit(SET_AUTH, res.data);
        } else {
          console.log("res is", res);
        }
      })
      .catch(error => {
        console.log("error", Object.assign({}, error));
        console.log(
          "error.request.status",
          Object.assign({}, error).request.status
        );
        let status = Object.assign({}, error).request.status;
        if (status == 401) {
          console.log("status is: ", status);
          payload = { badEmail: true };
          context.commit(SET_BAD_EMAIL, payload);
        } else if (status == 403) {
          payload = { goBack: true };
          console.log("payload.goBack", payload.goBack);
          context.commit(SET_GO_BACK, payload);
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
