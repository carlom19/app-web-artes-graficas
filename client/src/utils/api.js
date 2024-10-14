import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

/**
 * Interceptor para añadir el token de autenticación a las solicitudes
 * @param {Object} config - Configuración de la solicitud
 * @returns {Object} Configuración modificada
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;