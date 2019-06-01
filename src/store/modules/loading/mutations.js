import { START_LOADING, STOP_LOADING } from "../../mutations.type";

export const mutations = {
  [START_LOADING](state) {
    state.isLoading = true;
  },
  [STOP_LOADING](state) {
    state.isLoading = false;
  }
};
