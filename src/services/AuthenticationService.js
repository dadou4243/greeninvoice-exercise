import StorageService from './StorageService';

export default {
  setJwtToken: token => StorageService.setItem('jwt_token', token),
  getJwtToken: token => StorageService.getItem('jwt_token', token),
  removeJwtToken: () => StorageService.removeItem('jwt_token')
};
