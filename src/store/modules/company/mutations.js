import { SET_COMPANYS, SET_COMPANY } from "../../mutations.type";

export const mutations = {
  [SET_COMPANYS](state, companys) {
    state.companys = companys;
  },
  [SET_COMPANY](state, company) {
    state.company = company;
  }
};
