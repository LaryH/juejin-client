import axios from "axios";

const request = axios.create({});

// 请求拦截器
request.interceptors.request.use((config) => {
  return config;
});

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return new Promise(error);
  }
);

export default request;
