import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'

class AxiosUtil {
  private instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    // 添加请求拦截器
    this.instance.interceptors.request.use((config) => {
      // 在请求发送之前做一些事情
      return config
    }, (error) => {
      // 请求错误处理
      return Promise.reject(error)
    })

    // 添加响应拦截器
    this.instance.interceptors.response.use((response) => {
      // 响应成功处理
      return response
    }, (error: AxiosError) => {
      // 响应错误处理
      console.error('请求错误:', error.message)
      return Promise.reject(error)
    })
  }

  public getInstance(): AxiosInstance {
    return this.instance
  }
}

const defaultConfig: AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_API_PREFIX}`,
  timeout: 10000,
}

const axiosUtil = new AxiosUtil(defaultConfig)

export default axiosUtil.getInstance()
