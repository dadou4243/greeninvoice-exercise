import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from '../components/LoginPage.vue';
import WelcomePage from '../components/WelcomePage.vue';
import UserInfo from '../components/UserInfo.vue';

// import store from '../store'; // your vuex store

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  // console.log('store.state.loggedIn:', store.state.loggedIn);
  // if (!store.state.loggedIn) {
  if (!localStorage.getItem('jwt_token')) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  // console.log('store.state.loggedIn:', store.state.loggedIn);

  // if (store.state.loggedIn) {
  if (localStorage.getItem('jwt_token')) {
    next();
    return;
  }
  next('/login');
};

const routes = [
  // { path: '/', component: App },
  {
    path: '/',
    redirect: 'welcome'
  },
  {
    path: '/login',
    // name: 'login',
    component: LoginPage,
    beforeEnter: ifNotAuthenticated
  },
  { path: '/welcome', component: WelcomePage, beforeEnter: ifAuthenticated },
  { path: '/user', component: UserInfo, beforeEnter: ifAuthenticated },
  // otherwise redirect to home
  { path: '*', redirect: '/' }
];

export default new Router({
  mode: 'history',
  routes
});
