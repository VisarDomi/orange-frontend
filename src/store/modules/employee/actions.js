import {
  CREATE_EMPLOYEE,
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  UPDATE_EMPLOYEE,
  GET_EMPLOYEE_RESERVATION,
  GET_EMPLOYEES_BY_ID,
  GET_EMPLOYEE_RESERVATIONS
} from "../../actions.type";
import {
  SET_EMPLOYEES,
  SET_EMPLOYEE,
  SET_EMPLOYEE_RESERVATION,
  SET_EMPLOYEE_RESERVATIONS
} from "../../mutations.type";
import {
  EmployeeService,
  UserService
} from "../../services/api";
import { getUser } from "../../services/userstorage";

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
    let companyId = getUser().role_id;
    await EmployeeService.createEmployee(companyId, employee).then(
      ({ data }) => {
        return data;
      }
    );
  },

  async [UPDATE_EMPLOYEE](context, payload) {
    const { companyId, employeeId } = payload;
    delete payload.companyId
    delete payload.employeeId
    await EmployeeService.putEmployee(companyId, employeeId, payload).then(({data}) =>{
      console.log("setting employee data...");
      context.commit(SET_EMPLOYEE, data);
      return data
    });
  },


  async [GET_EMPLOYEES_BY_ID](context, payload) {
    const {companyId} = payload;
    await EmployeeService.getEmployees(companyId).then(({ data }) => {
      console.log("setting employee state to ", data);
      context.commit(SET_EMPLOYEES, data);
    });
  },

  async [GET_EMPLOYEES](context, payload) {
    let companyId = getUser().role_id;
    await EmployeeService.getEmployees(companyId).then(({ data }) => {
      console.log("setting employee state to ", data);
      context.commit(SET_EMPLOYEES, data);
    });
  },

  async [GET_EMPLOYEE](context, payload) {
    const { employeeId } = payload;
    let companyId = getUser().role_id;
    await EmployeeService.getEmployee(companyId, employeeId).then(
      ({ data }) => {
        console.log("setting employee state to ", data);
        context.commit(SET_EMPLOYEE, data);
      }
    );
  },

  async [GET_EMPLOYEE_RESERVATION](context, payload) {
    const employeeId = getUser().role_id;
    const companyId = context.getters.employee.company_id;
    const { reservationId } = payload;
    await EmployeeService.getReservation(
      companyId,
      employeeId,
      reservationId
      ).then(({ data }) => {
      context.commit(SET_EMPLOYEE_RESERVATION, data);
      console.log("setting reservation", data);
      return data;
    });
  },
  async [GET_EMPLOYEE_RESERVATIONS](context) {
    const employeeId = getUser().role_id;
    const companyId = context.getters.employee.company_id;
    await EmployeeService.getReservations(companyId, employeeId).then(
      ({ data }) => {
        context.commit(SET_EMPLOYEE_RESERVATIONS, data);
        console.log("setting reservations", data);
        return data;
      }
    );
  }
};
