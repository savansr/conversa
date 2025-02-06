import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://conversa-backend-liwy.onrender.com/api",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add response interceptor to handle errors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Axios Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;
