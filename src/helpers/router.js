import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from '../components/LoginPage.vue';
import WelcomePage from '../components/WelcomePage.vue';

Vue.use(Router);

const routes = [
  // { path: '/', component: App },
  {
    path: '/',
    redirect: 'login'
  },
  { path: '/login', component: LoginPage },
  { path: '/welcome', component: WelcomePage },
  // otherwise redirect to home
  { path: '*', redirect: '/' }
];

export default new Router({
  mode: 'history',
  routes
});

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// });
