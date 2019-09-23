import request from '@/utils/request'

// 机械作业完成情况左右图表
export function FechGetGarbageAmount(params) {
  return request({
    url: '/api/bigdata/GetGarbageAmount',
    method: 'get',
    params
  })
}
