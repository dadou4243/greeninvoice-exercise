import Vue from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';

axios.defaults.baseURL = 'https://sandbox.d.greeninvoice.co.il/api/v1/';

import './style.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
