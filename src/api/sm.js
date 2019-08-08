import request from '@/utils/axios'
import config from '@/config'
const prefix = config.prefix

export function fetchList(params) {
  return request({
    url: prefix + 'sm/list',
    method: 'get',
    params
  })
}
export function fetchDetail(params) {
  return request({
    url: prefix + 'sm/detail',
    method: 'get',
    params
  })
}
