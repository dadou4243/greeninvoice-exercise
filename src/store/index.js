import Vue from 'vue';
import Vuex from 'vuex';
import UserApi from '../services/api/User';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    showModal: false,
    selectedNoteData: {},
    filteredNotes: []
  },
  actions: {
    // Login
    login({ dispatch }, loginInfo) {
      return new Promise((resolve, reject) => {
        console.log('loginInfo:', loginInfo);
        // Check if the editable field of the note has been changed
        UserApi.login(loginInfo)
          .then(response => {
            console.log('response:', response);

            resolve(response);
          })
          .catch(err => {
            console.log('err:', err.response);
            // commit('auth_error');
            // localStorage.removeItem('token');
            reject(err);
          });
      });
    }
  },
  mutations: {
    login(state, payload) {
      state.selectedNoteData = payload;
    }
  },

  getters: {}
});
