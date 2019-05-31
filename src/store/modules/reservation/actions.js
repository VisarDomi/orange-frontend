import { CREATE_RESERVATION, GET_RESERVATIONS } from "../../actions.type";
import { SET_RESERVATIONS } from "../../mutations.type";
import { ReservationService } from "@/common/api.service";
import UserService from "@/common/userstorage.service";


export const actions = {
  async [CREATE_RESERVATION](context, payload) {
    const { reservation } = payload;
    console.log(payload)
    let companyId = UserService.getUser().role_id
    await ReservationService.createReservation(payload, companyId).then(
      ({ data }) => {
        return data;
      }
    );
  },
  async [GET_RESERVATIONS](context){
    const companyId = UserService.getUser().role_id
    await ReservationService.getReservations(companyId).then(
      ({ data }) => {
        context.commit(SET_RESERVATIONS, data);
        console.log("setting reservations", data)
        return data;
      }
    );
  }
};
