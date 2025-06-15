import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../context/AuthProvider";

const axiosInstance = axios.create({
  baseURL: "https://study-bond-server.vercel.app",
});

const useAxiosSecure = () => {
  const { user } = use(AuthContext);

  axiosInstance.interceptors.request.use(
    async (config) => {
      if (user) {
        try {
          const token = await user?.accessToken;
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
  return axiosInstance;
};

export default useAxiosSecure;
