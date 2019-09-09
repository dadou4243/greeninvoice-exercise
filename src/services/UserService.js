import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
};

console.log('headers:', headers);

export default {
  // Get a specific note information
  getBusinesses() {
    return axios
      .get('https://api.greeninvoice.co.il/api/v1/expenses/statuses', {
        headers
      })
      .then(response => {
        return response;
      });
  },
  getUserInfo() {
    return axios
      .get('https://api.greeninvoice.co.il/api/v1/users/me', {
        headers
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
