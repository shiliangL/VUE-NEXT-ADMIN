import request from '@/utils/request'
import config from '@/config'
const  prefix = config.prefix

export function login() {
  return request({
    url: prefix+ 'login',
    method: 'post'
  })
}

export function register() {
  return request({
    url: prefix + 'register',
    method: 'post'
  })
}

export function list(params) {
  return request({
    url: prefix +'user/info',
    method: 'get',
     params
  })
}


