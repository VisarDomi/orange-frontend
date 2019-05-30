import { CREATE_RESERVATION } from "../../actions.type";
import { ReservationService } from "@/common/api.service";
import UserService from "@/common/userstorage.service";


export const actions = {
  async [CREATE_RESERVATION](context, payload) {
    const { reservation } = payload;
    console.log(payload)
    // companyId = UserService.getUser().company_id  --> this is needed for full functionality, plug in method below as first argument
    await ReservationService.createReservation(payload).then(
      ({ data }) => {
        return data;
      }
    );
  }
};
