import axios from 'axios';

export default {
  getUserInfo() {
    return axios
      .get('users/me', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
        }
      })
      .then(response => {
        return response;
      });
  },
  login({ email, password }) {
    return axios.post('account/login', { email, password });
  },
  logout() {
    return axios.post('account/logout');
  }
};
