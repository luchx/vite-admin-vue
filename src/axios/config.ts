import axios, { AxiosError } from "axios";

// 修改axios配置信息
const service = axios.create({
  // 超时设置20s
  timeout: 20000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "If-Modified-Since": 0, // 防止get请求在IE下被缓存
  },
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  (response) => {
    const data = response.data;
    // 5010: token失效
    // if (data.code === 5010) {
    // }
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
export default service;
