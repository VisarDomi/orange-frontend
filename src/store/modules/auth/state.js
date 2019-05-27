import JwtService from "@/common/jwt.service";

export const state = {
  errors: null,
  user: {},
  token: "",
  isAuthenticated: !!JwtService.getToken()
};
