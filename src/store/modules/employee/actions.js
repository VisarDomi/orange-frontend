import {
  CREATE_EMPLOYEE,
  GET_EMPLOYEES,
  GET_EMPLOYEE
} from "../../actions.type";
import { SET_EMPLOYEES, SET_EMPLOYEE } from "../../mutations.type";
import { EmployeeService, UserService } from "@/common/api.service";
import UserStorageService from "@/common/userstorage.service";

export const actions = {
  async [CREATE_EMPLOYEE](context, payload) {
    let user_id = "";
    console.log(payload.email);
    await UserService.createUser({
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
    let company_id = UserStorageService.getUser().role_id;
    await EmployeeService.createEmployee(company_id, employee).then(
      ({ data }) => {
        return data;
      }
    );
  },

  async [GET_EMPLOYEES](context, payload) {
    let company_id = UserStorageService.getUser().role_id;
    await EmployeeService.getEmployees(company_id).then(({ data }) => {
      console.log("setting employee state to ", data);
      context.commit(SET_EMPLOYEES, data);
    });
  },

  async [GET_EMPLOYEE](context, payload) {
    const { employeeId } = payload;
    let company_id = UserStorageService.getUser().role_id;
    await EmployeeService.getEmployee(company_id, employeeId).then(
      ({ data }) => {
        console.log("setting employee state to ", data);
        context.commit(SET_EMPLOYEE, data);
      }
    );
  }
};
