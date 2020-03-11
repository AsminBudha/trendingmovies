import axios from "axios";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  function(config) {
    // Do something before request is sent

    config.params = {
      api_key: process.env.REACT_APP_API_KEY
    };

    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
