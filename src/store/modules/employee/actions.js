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

export const actions = {
  async [CREATE_EMPLOYEE](context, payload) {
    const { companyId, employee } = payload;
    await EmployeeService.createEmployee(companyId, employee).then(
      ({ data }) => {
        context.commit(SET_EMPLOYEE, data);
      }
    );
  },
  async [GET_EMPLOYEES](context, payload) {
    const { companyId } = payload;
    await EmployeeService.getEmployees(companyId).then(({ data }) => {
      context.commit(SET_EMPLOYEES, data);
    });
  },

  async [GET_EMPLOYEE](context, payload) {
    const { companyId, employeeId } = payload;
    await EmployeeService.getEmployee(companyId, employeeId).then(
      ({ data }) => {
        context.commit(SET_EMPLOYEE, data);
      }
    );
  },

  async [UPDATE_EMPLOYEE](context, payload) {
    const { companyId, employeeId, employee } = payload;
    await EmployeeService.putEmployee(companyId, employeeId, employee).then(
      ({ data }) => {
        context.commit(SET_EMPLOYEE, data);
      }
    );
  },

  async [DELETE_EMPLOYEE](context, payload) {
    const { companyId, employeeId } = payload;
    await EmployeeService.deleteEmployee(companyId, employeeId)
  },

  async [GET_EMPLOYEE_RESERVATIONS](context) {
    const { companyId, employeeId } = payload;
    await EmployeeService.getReservations(companyId, employeeId).then(
      ({ data }) => {
        context.commit(SET_EMPLOYEE_RESERVATIONS, data);
      }
    );
  },

  async [GET_EMPLOYEE_RESERVATION](context, payload) {
    const { companyId, employeeId, reservationId } = payload;
    await EmployeeService.getReservation(
      companyId,
      employeeId,
      reservationId
    ).then(({ data }) => {
      context.commit(SET_EMPLOYEE_RESERVATION, data);
    });
  }
};
