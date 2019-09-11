import Vue from 'vue';
import store from './store';
import axios from 'axios';
import App from './App.vue';
import router from './router/router';
// Import main scss file
import './scss/app.scss';

Vue.config.productionTip = false;

// Set default baseURL from environment file
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
