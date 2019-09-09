export default {
  setJwtToken: token => {
    console.log('token:', token);
    localStorage.setItem('jwt_token', token);
  },
  logout: () => {
    console.log('logout');
    // remove user from local storage to log user out
    localStorage.removeItem('jwt_token');
  }
};
