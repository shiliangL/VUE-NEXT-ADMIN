import request from '@/utils/request'

export function getUserList(params) {
  return request({
    url: 'api/Task/UserList',
    method: 'get',
    params
  })
}

export function getCircleData(params) {
  return request({
    url: 'api/Task/CircleData',
    method: 'get',
    params
  })
}

export function getTaskInfoNum(params) {
  return request({
    url: 'api/Task/TaskInfo',
    method: 'get',
    params
  })
}
