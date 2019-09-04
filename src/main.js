import Vue from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3006';

import './style.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
