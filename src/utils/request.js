import axios from 'axios'

// import { getToken } from '@/utils/auth'

const service = axios.create({
  timeout: 15000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  // if (store.getters.token) {
  //   config.headers['Authorization'] = token
  // }
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    return  response
  },
  error => {
    console.log('err' + error)// for debug
    const status = error.response.status
    let message = null
    if (status === 400) {
      message = '错误请求，请检查参数'
    } else if (status === 401) {
      message = '身份验证未通过'
    } else if (status === 403) {
      message = '服务器拒绝请求'
    } else if (status === 404) {
      message = '服务器找不到请求的地址'
    } else if (status === 500) {
      message = '服务器内部错误'
    } else if (status === 502 || status === 504) {
      message = '网关错误或网关超时'
    }
    const result = {
      resultCode: -1,
      message: status + '    ' + message,
      status: status
    }
    return Promise.reject(result)
  })

export default service
