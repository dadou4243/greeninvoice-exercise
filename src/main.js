import Vue from 'vue';
import store from './store';
import axios from 'axios';
import App from './App.vue';
import router from './helpers/router';
// Import main scss file
import './style.scss';

Vue.config.productionTip = false;

// Set default baseURL from environment file
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

// How can I set default to headers if the jwt_token is not fixed in localStorage (it can be removed, edited, added...)
// const token = localStorage.getItem('jwt_token');
// if (token) {
//   axios.defaults.headers.common['Authorization'] = token;
// }

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
