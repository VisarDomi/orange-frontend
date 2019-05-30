import { CREATE_EMPLOYEE } from "../../actions.type";
import { EmployeeService, UserServiceApi } from "@/common/api.service";
import UserService from "@/common/userstorage.service";

export const actions = {
  async [CREATE_EMPLOYEE](context, payload) {

      let user_id = ""
      console.log(payload.email)
    await UserServiceApi.createUser({email: payload.email, password: payload.password}).then(
      ({ data }) => {
          user_id = data.id+""
        return data;
      }
    );


    await EmployeeService.createEmployee(
      UserService.getUser().id,
      {full_name: payload.name, address: payload.address, user_id: user_id}
    ).then(({ data }) => {
      return data;
    });
  }
};
