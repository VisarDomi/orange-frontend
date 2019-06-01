import {
  GET_EMPLOYEE_RESERVATION
} from "../../actions.type";
import { SET_EMPLOYEE_RESERVATION } from "../../mutations.type";
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
  }
};
