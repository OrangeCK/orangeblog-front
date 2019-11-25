import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  withCredentials: true
})

// 请求拦截
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  })

// 请求拦截
service.interceptors.response.use(
  res => {
    return res
  },
  error => {
    Message({
      message: error.message,
      type: 'error'
    })
    return Promise.reject(error)
  })

export default service
