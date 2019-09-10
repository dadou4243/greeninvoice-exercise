import Vue from 'vue';
import * as router from './helpers/router';
import App from './App.vue';
import store from './store';
import axios from 'axios';

axios.defaults.baseURL = 'https://sandbox.d.greeninvoice.co.il/api/v1';
// axios.defaults.baseURL = 'https://test.co.il';

Vue.prototype.$http = axios;

const token = localStorage.getItem('jwt_token');
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

import './style.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  // !!!!!!!!!!! find a way to export the router as a default value !!!!!!!!
  router: router.router,
  render: h => h(App)
}).$mount('#app');
