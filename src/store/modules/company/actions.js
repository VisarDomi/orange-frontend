import {
  CREATE_COMPANY,
  GET_COMPANYS,
  GET_COMPANY
} from "../../actions.type";
import { SET_COMPANYS, SET_COMPANY } from "../../mutations.type";
import { CompanyService, UserService } from "../../services/api";

export const actions = {
  async [CREATE_COMPANY](context, payload) {
    let user_id = "";
    console.log(payload.email);
    await UserService.createUser({
      email: payload.email,
      password: payload.password
    }).then(({ data }) => {
      user_id = data.id + "";
      return data;
    });
    let company = {
      full_name: payload.name,
      user_id: user_id
    };
    await CompanyService.createCompany(company).then(
      ({ data }) => {
        return data;
      }
    );
  },

  async [GET_COMPANYS](context, payload) {
    await CompanyService.getCompanys().then(({ data }) => {
      console.log("setting companys state to ", data);
      context.commit(SET_COMPANYS, data);
    });
  },

  async [GET_COMPANY](context, payload) {
    const { companyId } = payload;
    await CompanyService.getCompany(companyId).then(
      ({ data }) => {
        console.log("setting company state to ", data);
        context.commit(SET_COMPANY, data);
      }
    );
  }
};
