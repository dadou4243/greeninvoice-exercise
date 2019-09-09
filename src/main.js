import Vue from 'vue';
import router from './helpers/router';
import App from './App.vue';
import store from './store';
import axios from 'axios';

axios.defaults.baseURL = 'https://sandbox.d.greeninvoice.co.il/api/v1/';

Vue.prototype.$http = axios;

import './style.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
