import {
  GET_EMPLOYEE_RESERVATION,
  GET_EMPLOYEE_RESERVATIONS
} from "../../actions.type";
import { SET_EMPLOYEE_RESERVATION, SET_EMPLOYEE_RESERVATIONS } from "../../mutations.type";
import { EmployeeReservationService } from "../../services/api";
import { getUser } from "../../services/userstorage";

export const actions = {
  async [GET_EMPLOYEE_RESERVATION](context, payload) {
    const companyId = getUser().role_id;
    const employeeId = context.getters.employee.id;
    const { reservationId } = payload;
    await EmployeeReservationService.getReservation(companyId, employeeId, reservationId).then(
      ({ data }) => {
        context.commit(SET_EMPLOYEE_RESERVATION, data);
        console.log("setting reservation", data);
        return data;
      }
    );
  },
  async [GET_EMPLOYEE_RESERVATIONS](context) {
    const employeeId = getUser().role_id;
    await EmployeeReservationService.getReservation(employeeId).then(
      ({ data }) => {
        context.commit(SET_EMPLOYEE_RESERVATIONS, data);
        console.log("setting reservations", data);
        return data;
      }
    );
  }
};
