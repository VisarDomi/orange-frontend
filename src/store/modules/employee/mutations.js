import { SET_EMPLOYEES, SET_EMPLOYEE } from "../../mutations.type";

export const mutations = {
  [SET_EMPLOYEES](state, employees) {
    state.employees = employees;
  },
  [SET_EMPLOYEE](state, employee) {
    state.employee = employee;
  }
};
