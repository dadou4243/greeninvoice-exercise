import Vue from 'vue';
import Vuex from 'vuex';
import UserApi from '../services/UserService';

import AuthenticationService from '../services/AuthenticationService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: {}
  },
  actions: {
    // Login
    login({ commit }, loginInfo) {
      return new Promise((resolve, reject) => {
        console.log('loginInfo:', loginInfo);
        // Check if the editable field of the note has been changed
        UserApi.login(loginInfo)
          .then(response => {
            // console.log('response:', response);
            // console.log('response:', response.headers);
            AuthenticationService.setJwtToken(
              response.headers['x-authorization-bearer']
            );

            console.log('response.data:', response.data);
            commit('login', response.data);

            resolve(response);
          })
          .catch(err => {
            console.log('err:', err.response);
            // commit('auth_error');
            // localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    logout({ commit }) {
      // return new Promise((resolve, reject) => {resolve(AuthenticationService.logout()});
      AuthenticationService.logout();
      commit('logout');
    },
    getUserInfo() {
      console.log('getBusinesses');
      UserApi.getUserInfo().then(response => {
        console.log('response:', response);
      });
    },
    getBusinesses() {
      console.log('getBusinesses');
      UserApi.getBusinesses().then(response => {
        console.log('response:', response);
      });
    }
  },
  mutations: {
    login(state, user) {
      console.log('user:', user);
      state.loggedIn = true;
      state.user = user;
    },
    logout(state) {
      state.loggedIn = false;
      state.user = {};
    },
    setBusinesses(state, businesses) {
      state.businesses = businesses;
    }
  },

  getters: {}
});
