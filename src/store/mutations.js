export default {
  successLogin(state, user) {
    console.log('user:', user);
    state.loggedIn = true;
    state.isLoginLoading = false;
    state.user = user;
  },
  setIsLoginLoading(state, value) {
    state.isLoginLoading = value;
  },
  failedLogin(state) {
    state.isLoginLoading = false;
  },
  logout(state) {
    state.loggedIn = false;
    state.user = {};
  },
  setUserInfo(state, userInfo) {
    state.user = userInfo;
  },
  setBusinesses(state, businesses) {
    state.businesses = businesses;
  }
};
