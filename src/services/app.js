import axios from 'axios';

const api = axios.create({
  baseURL: 'https://appsb-c288f-default-rtdb.firebaseio.com/',
});

export default api;
