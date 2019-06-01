import { getToken } from "../../services/jwt";

export const state = {
  errors: null,
  user: {},
  token: "",
  isAuthenticated: !!getToken(),
  role: "",
  goBack: false
};
