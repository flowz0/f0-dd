import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api/auth",
  withCredentials: true,
});

export default api;