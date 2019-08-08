import request from '@/utils/axios'
import config from '@/config'
const prefix = config.prefix

export function fetchList(query) {
  return request({
    url: prefix + 'hot/list',
    method: 'get',
    params: query
  })
}

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
