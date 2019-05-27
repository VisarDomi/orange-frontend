import { SET_PROFILE } from "../../mutations.type";

export const mutations = {
  [SET_PROFILE](state, profile) {
    state.profile = profile;
    state.errors = {};
  }
};
