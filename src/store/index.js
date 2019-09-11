import Vue from 'vue';
import Vuex from 'vuex';
import UserApi from '../services/UserService';

import AuthenticationService from '../services/AuthenticationService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: {},
    businesses: {}
  },
  actions: {
    // Login
    login({ commit }, loginInfo) {
      return new Promise((resolve, reject) => {
        console.log('loginInfo:', loginInfo);
        // Check if the editable field of the note has been changed
        UserApi.login(loginInfo)
          .then(response => {
            AuthenticationService.setJwtToken(
              response.headers['x-authorization-bearer']
            );

            commit('login', response.data);

            resolve(response);
          })
          .catch(err => {
            // commit('auth_error');
            localStorage.removeItem('jwt_token');
            reject(err);
          });
      });
    },
    logout({ commit }) {
      AuthenticationService.logout();
      commit('logout');
    },
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        UserApi.getUserInfo()
          .then(response => {
            console.log('response:', response);
            commit('setUserInfo', response.data);
            resolve(response.data);
          })
          .catch(error => {
            console.log('error:', error.response);
            commit('logout');
            localStorage.removeItem('jwt_token');
            reject(error.response);
          });
      });
    },
    getBusinesses({ commit }) {
      UserApi.getBusinesses()
        .then(response => {
          console.log('response:', response);
        })
        .catch(error => {
          console.log('error:', error);
          commit('logout');
        });
    }
    // getJwtToken({ commit }) {
    //   UserApi.getJwtToken().then(response => {
    //     console.log('response', response);
    //   });
    //   // .catch(error => {
    //   //   console.log('error:', error);
    //   //   commit('logout');
    //   // });
    // }
  },
  mutations: {
    login(state, user) {
      console.log('user:', user);
      state.loggedIn = true;
      // state.user = user;
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
  },
  getters: {
    getUserInfo: state => state.user,
    getIsLoggedIn: state => state.loggedIn,
    getBusinessInfo: state => state.businesses
  }
});
