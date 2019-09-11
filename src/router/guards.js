import AuthenticationService from '../services/AuthenticationService';

export const ifNotAuthenticated = (to, from, next) => {
  if (!AuthenticationService.getJwtToken()) {
    next();
    return;
  }
  next('/');
};

export const ifAuthenticated = (to, from, next) => {
  if (AuthenticationService.getJwtToken()) {
    next();
    return;
  }
  next('/login');
};
