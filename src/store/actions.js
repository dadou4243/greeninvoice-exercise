import AuthenticationService from '../services/AuthenticationService';
import UserApi from '../services/UserService';

export default {
  // Login
  login({ commit }, loginInfo) {
    return new Promise((resolve, reject) => {
      //   console.log('loginInfo:', loginInfo);
      commit('setLoading', true);
      // Check if the editable field of the note has been changed
      UserApi.login(loginInfo)
        .then(response => {
          AuthenticationService.setJwtToken(
            response.headers['x-authorization-bearer']
          );

          commit('successLogin', response.data);

          resolve(response);
        })
        .catch(err => {
          commit('failedLogin');
          AuthenticationService.removeJwtToken();
          reject(err);
        });
    });
  },
  logout({ commit }) {
    AuthenticationService.removeJwtToken();
    commit('logout');
  },
  getUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      UserApi.getUserInfo()
        .then(response => {
          //   console.log('response:', response);
          commit('setUserInfo', response.data);
          resolve(response.data);
        })
        .catch(error => {
          //   console.log('error:', error.response);
          commit('logout');
          localStorage.removeItem('jwt_token');
          reject(error.response);
        });
    });
  },
  getBusinesses({ commit }) {
    UserApi.getBusinesses()
      .then(response => {
        // console.log('response:', response);
      })
      .catch(error => {
        console.log('error:', error);
        commit('logout');
      });
  }
};
