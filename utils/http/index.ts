import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import qs from 'qs'

const instance: AxiosInstance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  paramsSerializer (params) {
    return qs.stringify(params, { arrayFormat: 'comma' })
  },
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => config,
  err => err
)

instance.interceptors.response.use(
  (response) => {
    const { status } = response
    if (status >= 200 && status < 400) {
      return response.data
    }
    return Promise.reject(response)
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default function request<T> (req: AxiosRequestConfig): Promise<T> {
  return instance.request(req)
}
