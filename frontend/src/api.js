import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "http://127.0.0.1:8000"; // Ensure this URL is correct

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getUserInfo = async () => {
  try {
    const response = await api.get("api/user/info/");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user info:", error);
    throw error;
  }
};

export default api;
