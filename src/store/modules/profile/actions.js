import { ProfileService } from "@/common/api.service";
import { FETCH_PROFILE } from "../../actions.type";
import { SET_PROFILE } from "../../mutations.type";

export const actions = {
  async [FETCH_PROFILE](context, payload) {
    const { id } = payload;
    await ProfileService.getProfile(id).then(({ data }) => {
      context.commit(SET_PROFILE, data);
      // return data;
    });
  }
};
