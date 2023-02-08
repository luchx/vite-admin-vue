import { AxiosRequestConfig } from "axios";
import axios from "./config";

export interface RespondData {
  code: number;
  body: any;
  msg: string;
}

// HTTP工具类
export default class Http {
  public static async request(params: AxiosRequestConfig) {
    try {
      const res = await axios({
        headers: {
        },
        ...params,
      });
      // console.log("打印请求值 ☞", res.data);
      const data = res.data as RespondData;
      if (data.code == 200) {
        return Promise.resolve(data);
      }

      // ElMessage.error(data.msg || "HTTP ERROR");
      return Promise.reject(data);
    } catch (e: any) {
      console.error(e);
      // ElMessage.error(e.message || "HTTP ERROR");
      return Promise.reject(e);
    }
  }

  /**
   * get
   * @param [url] 地址
   * @param [data] 数据
   * @returns Promise
   */
  public static get(url: string, params?: object, axiosConfig = {}) {
    return this.request({
      method: "GET",
      url,
      params,
      ...axiosConfig,
    });
  }

  /**
   * put
   * @param [url] 地址
   * @param [data] 数据
   * @returns Promise
   */
  public static put(url: string, data?: object, axiosConfig = {}) {
    return this.request({
      method: "PUT",
      url,
      data,
      ...axiosConfig,
    });
  }

  /**
   * post
   * @param [url] 地址
   * @param [data] 数据
   * @returns Promise
   */
  public static post(url: string, data?: object, axiosConfig = {}) {
    return this.request({
      method: "POST",
      url,
      data,
      ...axiosConfig,
    });
  }

  /**
   * delete
   * @param [url] 地址
   * @param [params] 数据
   * @returns Promise
   */
  public static delete(url: string, params?: object, axiosConfig = {}) {
    return this.request({
      method: "DELETE",
      url,
      params,
      ...axiosConfig,
    });
  }
}
