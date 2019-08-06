import request from '_u/axios'
import config from '@/config'
const prefix = config.prefix
const baseUrl = process.env.VUE_APP_BASE_API
console.log(baseUrl, 'api')

export const saveBaseCompany = (data) => {
  return request({
    url: prefix + 'releaserulelib/savecompany',
    data,
    method: 'post'
  })
}

export const fetchTodayList = (params) => {
  return request({
    url: prefix + 'today',
    params,
    method: 'get'
  })
}
export const fetchListType = (params = {}) => {
  const srt = Object.values(params).join('/')
  return request({
    url: prefix + 'data/' + srt,
    method: 'get'
  })
}
