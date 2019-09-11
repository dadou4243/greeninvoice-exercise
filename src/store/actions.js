import AuthenticationService from '../services/AuthenticationService';
import UserApi from '../services/UserService';

export default {
  login({ commit }, loginInfo) {
    return new Promise((resolve, reject) => {
      commit('setLoading', true);

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
          commit('setUserInfo', response.data);
          resolve(response.data);
        })
        .catch(error => {
          commit('logout');
          localStorage.removeItem('jwt_token');
          reject(error.response);
        });
    });
  }
};
