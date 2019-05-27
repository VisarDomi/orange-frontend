export const getters = {
  getCurrentUser: state => state.user,
  getCurrentToken: state => state.token,
  isAuthenticated: state => state.isAuthenticated
};
