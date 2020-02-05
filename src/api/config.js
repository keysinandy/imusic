import axios from 'axios';

const baseUrl = 'http://47.103.22.99:3000';

//axios 的实例及拦截器配置
const axiosInstance = axios.create ({
  baseURL: baseUrl,
  timeout : 5000,
  withCredentials :true,
});

axiosInstance.interceptors.response.use (
  res => res.data,
  err => {
    console.error(err, "response error");
  }
);
axiosInstance.interceptors.request.use (
  config => {
    // console.warn(config);
    return config;
  },
  err=>{
    console.error(err, "request error")
  }

)
export {
  axiosInstance
};