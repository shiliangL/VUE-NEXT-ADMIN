import request from '@/utils/axios'
import config from '@/config'
const prefix = config.prefix

export function fetchList(params) {
  return request({
    url: prefix + 'sg/list',
    method: 'get',
    params
  })
}

export function fetchDetail(params) {
  return request({
    url: prefix + 'sg/detail',
    method: 'get',
    params
  })
}
