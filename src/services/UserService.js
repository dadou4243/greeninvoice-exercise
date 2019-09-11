import axios from 'axios';

const apiCode = {
  id: 'f9bfc168-81bb-4c5a-95fa-babeced13a59',
  secret: 'pqyl75jTt6E_gyS6ILKM9w'
};

export default {
  // Get a specific note information
  getBusinesses() {
    return axios
      .get('expenses/statuses', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
        }
      })
      .then(response => {
        return response;
      });
  },
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
    console.log('login api');
    return axios.post('account/login', { email, password });
  },
  logout() {
    return axios.post('account/logout');
  },
  getJwtToken() {
    return axios.post('account/token', apiCode);
  }
};
