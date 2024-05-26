// lib/axiosInstance.js
import axios from 'axios';

const apiFactos = axios.create({
  baseURL: 'https://quintopoder.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  maxBodyLength: Infinity,
});

apiFactos.interceptors.request.use(
  config => {
    // Puedes modificar el request aquí si es necesario
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

apiFactos.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export function setAPIToken(token: string) {
  console.log("setAPITOKEN--->")
  console.log(token)
  apiFactos.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default apiFactos;
