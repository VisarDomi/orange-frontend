import {
  CREATE_EMPLOYEE,
  GET_EMPLOYEES,
  GET_EMPLOYEE
} from "../../actions.type";
import { SET_EMPLOYEES } from "../../mutations.type";
import { EmployeeService, UserServiceApi } from "@/common/api.service";
import UserService from "@/common/userstorage.service";

export const actions = {
  async [CREATE_EMPLOYEE](context, payload) {
    let user_id = "";
    console.log(payload.email);
    await UserServiceApi.createUser({
      email: payload.email,
      password: payload.password
    }).then(({ data }) => {
      user_id = data.id + "";
      return data;
    });
    let employee = {
      full_name: payload.name,
      address: payload.address,
      user_id: user_id
    };
    let company_id = UserService.getUser().role_id;
    await EmployeeService.createEmployee(employee, company_id).then(
      ({ data }) => {
        return data;
      }
    );
  },

  async [GET_EMPLOYEES](context, payload) {
    let company_id = UserService.getUser().role_id;
    await EmployeeService.getEmployees(company_id).then(
      ({ data }) => {
        console.log("setting employee state to ", data);
        context.commit(SET_EMPLOYEES, data);
      }
    );
  },

  async [GET_EMPLOYEE](context, payload) {
    const { employee_id } = payload
    let company_id = UserService.getUser().role_id;
    await EmployeeService.getEmployee(company_id, employee_id).then(
      ({ data }) => {
        console.log("setting employee state to ", data);
        context.commit(SET_EMPLOYEES, data);
      }
    );
  }
};
