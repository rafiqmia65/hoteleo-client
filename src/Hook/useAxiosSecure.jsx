import React from "react";
import axios from "axios";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_serverURL}`,
});

const useAxiosSecure = () => {
  const { user, logOut } = useAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error.response?.status;
      if (status === 401 || status === 403) {
        logOut()
          .then(() => {
            console.log("Signed out due to unauthorized access.");
          })
          .catch((err) => {
            console.error("Logout error:", err);
          });
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
