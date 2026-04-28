import axios from "axios";

const api = axios.create({
  baseURL: "https://your-backend.onrender.com/api/v1",
  withCredentials: true 
});

api.interceptors.request.use((config) => {
  config.headers["X-API-Version"] = "1";
  return config;
});

export default api;
