import request from '@/utils/request'

// 全覆盖总图 左右数据
export function getHomeData(params) {
  return request({
    url: '/api/map/HomeData',
    method: 'get',
    params
  })
}

// 区域地图边界数据
export function getAreaMapData(params) {
  return request({
    url: '/api/map/AreaMapData',
    method: 'get',
    params
  })
}
