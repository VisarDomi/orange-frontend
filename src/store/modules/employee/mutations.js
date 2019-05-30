import { SET_EMPLOYEES } from "../../mutations.type";

export const mutations = {
    [SET_EMPLOYEES](state, employees) {
      state.employees = employees;
    },
}