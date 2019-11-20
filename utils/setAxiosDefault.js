import axios from "axios";

const setAxiosDefaults = () => {
  axios.defaults.baseURL = "http://localhost:5000/api/";
  axios.interceptors.request.use(
    config => {
      if (!config.headers.Authorization) {
        if (localStorage.jwtToken) {
          config.headers.Authorization = localStorage.jwtToken;
        }
      }
      return config;
    },
    error => Promise.reject(error)
  );
};

export default setAxiosDefaults;
