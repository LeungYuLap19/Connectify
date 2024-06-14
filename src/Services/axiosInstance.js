import axios from 'axios';
import { refreshAccessToken } from './tokenServices';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});

api.interceptors.response.use(
    (res) => res,
    async (err) => {
        const originalReq = err.config;
        if ((err.response.status === 401 || err.response.status === 403) && !originalReq._retry && originalReq.url !== '/token/refreshAccessToken') {
            originalReq._retry = true;

            try {
                const data = await refreshAccessToken();
                if (data) {
                    return api(originalReq);
                }
            } catch (refreshErr) {
                return Promise.reject(refreshErr);
            }
        }
        return Promise.reject(err);
    }
);

export default api;