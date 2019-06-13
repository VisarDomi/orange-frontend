export const getters = {
  getUser: state => state.user,
  getToken: state => state.token,
  isAuthenticated: state => state.isAuthenticated,
  getRole: state => state.role,
  getGoBack: state => state.goBack,
  getBadEmail: state => state.badEmail,
};
