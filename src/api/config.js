import axios from 'axios';
import { createHashHistory } from 'history'
const baseUrl = 'http://47.103.22.99:3000';
const history = createHashHistory()
//axios 的实例及拦截器配置
const axiosInstance = axios.create ({
  baseURL: baseUrl,
  timeout : 5000,
  withCredentials :true,
  
});

axiosInstance.interceptors.response.use (
  res => res.data,
  err => {
    console.warn(err.response, "response error");
    const data = err.response.data;
    const config = err.response.config
    if (data && config.url !== '/login/status' && data.code === 301 && data.msg === '需要登录') {
      history.push('/login/phoneLogin')
    }
  }
);
axiosInstance.interceptors.request.use (
  config => {
    return config;
  },
  err=>{
    console.error(err, "request error")
  }

)
export {
  axiosInstance
};