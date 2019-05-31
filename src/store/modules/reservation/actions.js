import { CREATE_RESERVATION } from "../../actions.type";
import { ReservationService } from "@/common/api.service";
import UserService from "@/common/userstorage.service";


export const actions = {
  async [CREATE_RESERVATION](context, payload) {
    const { reservation } = payload;
    console.log(payload)
    await ReservationService.createReservation(
      UserService.getUser().role_id,
      payload).then(
      ({ data }) => {
        return data;
      }
    );
  }
};
