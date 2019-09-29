import axios from 'axios'
import { Message } from 'element-ui'

// create an axios instance
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '',
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 18000 // request timeout
})

axios.defaults.headers['Content-Type']

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // if (config) {
    //   config.headers['Authorization'] = 'bearer ' + 'YXBwOmU5QzZsZ05PbFRWSXFkNWJy'
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    Message({
      message: error,
      type: 'error',
      duration: 5 * 1000
    })
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    if (response.status === 200 || response.data.success) {
      return response
    } else {
      Message({
        message: response.data.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
  },
  error => {
    console.log('err' + error) // for debug
    const errorRes = JSON.parse(JSON.stringify(error)).response || {}
    const status = errorRes.status // for debug
    const statusText = {
      404: '找不到对应的请求资源',
      405: '请求方法禁用',
      403: '被拒绝的请求',
      400: '错误的请求',
      500: '服务器遇到错误，无响应',
      502: '无效响应',
      503: '服务不可用',
      'invalid_grant': '验证码错误'
    }
    Message({
      message: statusText[status] || '未知错误！',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
