import axios from 'axios';

export const APP_URL = 'http://192.168.15.20:3333';

const api = axios.create({
  baseURL: APP_URL,
});

export default api;
