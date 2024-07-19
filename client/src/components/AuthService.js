// client/src/AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

const register = (username, password) => {
  return axios.post(API_URL + 'register', {
    username,
    password,
  });
};

const login = (username, password) => {
  return axios.post(API_URL + 'login', {
    username,
    password,
  });
};

const AuthService = {
  register,
  login,
};

export default AuthService;
