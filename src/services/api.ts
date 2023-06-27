import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const setupInterceptors = (signOut: () => void) => {
  api.interceptors.response.use(
    async (response) => {
      // success
      return response;
    },
    async (error) => {
      const status = error.response?.status;

      if (status === 401) {
        signOut();
      }

      return await Promise.reject(error);
    }
  );
};
