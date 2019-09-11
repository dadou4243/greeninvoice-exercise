export default {
  getUserInfo: state => state.user,
  getIsLoggedIn: state => state.loggedIn,
  getIsLoginLoading: state => state.isLoginLoading,
  getBusinessInfo: state => state.businesses
};
