import axios from "axios";
import { auth } from "../firebase/firebase.config";

const axiosSecure = axios.create({
  baseURL: "https://study-bond-server.vercel.app",
});

axiosSecure.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;
    if (user) {
      try {
        const token = await user.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
      } catch (error) {
        console.error("Failed to get token", error);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosSecure;
