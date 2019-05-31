import { CREATE_EMPLOYEE, GET_EMPLOYEES } from "../../actions.type";
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

    await EmployeeService.createEmployee(UserService.getUser().role_id, {
      full_name: payload.name,
      address: payload.address,
      user_id: user_id
    }).then(({ data }) => {
      return data;
    });
  },

  async [GET_EMPLOYEES](context, payload) {
    await EmployeeService.getEmployees(UserService.getUser().role_id).then(
      ({ data }) => {
        console.log("setting employee state to ", data);
        context.commit(SET_EMPLOYEES, data);
      }
    );
  }
};
