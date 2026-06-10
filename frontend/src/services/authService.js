import api from './api';

const authService = {
  register: (data) => api.post('/auth/register', data),
  login: (email, password) => api.post('/auth/login', { email, password }),
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  setAuthToken: (token) => {
    localStorage.setItem('authToken', token);
  },
  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  },
};

export default authService;
