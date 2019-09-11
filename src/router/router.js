import Vue from 'vue';
import Router from 'vue-router';
import * as guards from './guards';

import LoginPage from '../components/LoginPage.vue';
import WelcomePage from '../components/WelcomePage.vue';
import UserInfo from '../components/UserInfo.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: 'welcome'
  },
  {
    path: '/login',
    component: LoginPage,
    beforeEnter: guards.ifNotAuthenticated
  },
  {
    path: '/welcome',
    component: WelcomePage,
    beforeEnter: guards.ifAuthenticated
  },
  {
    path: '/user',
    component: UserInfo,
    beforeEnter: guards.ifAuthenticated
  },
  // otherwise redirect to home
  {
    path: '*',
    redirect: '/'
  }
];

export default new Router({
  mode: 'history',
  routes
});
