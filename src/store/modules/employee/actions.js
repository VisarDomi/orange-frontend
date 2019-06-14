import {
  CREATE_EMPLOYEE,
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  GET_EMPLOYEE_RESERVATION,
  GET_EMPLOYEE_RESERVATIONS
} from "../../actions.type";
import {
  SET_EMPLOYEES,
  SET_EMPLOYEE,
  SET_EMPLOYEE_RESERVATION,
  SET_EMPLOYEE_RESERVATIONS
} from "../../mutations.type";
import { EmployeeService } from "../../services/api";
import { getUser } from "../../services/userstorage";

export const actions = {
  async [CREATE_EMPLOYEE](context, employee) {
    let companyId = getUser().company_id;
    await EmployeeService.createEmployee(companyId, employee).then(
      ({ data }) => {
        return data;
      }
    );
  },
  async [GET_EMPLOYEES](context, payload) {
    let companyId = getUser().company_id;
    await EmployeeService.getEmployees(companyId).then(({ data }) => {
      console.log("setting employee state to ", data);
      context.commit(SET_EMPLOYEES, data);
    });
  },

  async [GET_EMPLOYEE](context, payload) {
    const { employeeId } = payload;
    let companyId = getUser().company_id;
    await EmployeeService.getEmployee(companyId, employeeId).then(
      ({ data }) => {
        console.log("setting employee state to ", data);
        context.commit(SET_EMPLOYEE, data);
      }
    );
  },

  async [UPDATE_EMPLOYEE](context, payload) {
    let companyId = getUser().company_id;
    delete payload.companyId;
    delete payload.employeeId;
    await EmployeeService.putEmployee(companyId, employeeId, payload).then(
      ({ data }) => {
        console.log("setting employee data...");
        context.commit(SET_EMPLOYEE, data);
        return data;
      }
    );
  },

  async [DELETE_EMPLOYEE](context, payload) {
    const { company_id, id } = payload;
    await EmployeeService.deleteEmployee(company_id, id).then(({ data }) => {
      console.log("deleting employee data...");
      context.commit(SET_EMPLOYEE, data);
      return data;
    });
  },

  async [GET_EMPLOYEE_RESERVATIONS](context) {
    const employeeId = getUser().id;
    const companyId = context.getters.employee.company_id;
    await EmployeeService.getReservations(companyId, employeeId).then(
      ({ data }) => {
        context.commit(SET_EMPLOYEE_RESERVATIONS, data);
        console.log("setting reservations", data);
        return data;
      }
    );
  },

  async [GET_EMPLOYEE_RESERVATION](context, payload) {
    const employeeId = getUser().id;
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
  }
};
