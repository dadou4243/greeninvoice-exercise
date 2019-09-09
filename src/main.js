import Vue from 'vue';
import * as router from './helpers/router';
console.log('router:', router);
import App from './App.vue';
import store from './store';
import axios from 'axios';

axios.defaults.baseURL = 'https://sandbox.d.greeninvoice.co.il/api/v1/';

Vue.prototype.$http = axios;

const token = localStorage.getItem('jwt_token');
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

import './style.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  router: router.router,
  render: h => h(App)
}).$mount('#app');
