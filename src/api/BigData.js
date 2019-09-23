import request from '@/utils/request'

// 机械作业完成情况左右图表
export function getJxzy_Graph(params) {
  return request({
    url: '/api/bigdata/jxzy_graph',
    method: 'get',
    params
  })
}

// 机械作业完成情况地图
export function getJxzy_Map(params) {
  return request({
    url: '/api/bigdata/jxzy_map',
    method: 'get',
    params
  })
}

// 垃圾清运左右图表
export function getLjqy_Graph(params) {
  return request({
    url: '/api/bigdata/ljqy_graph',
    method: 'get',
    params
  })
}

// 垃圾清运地图数据
export function getLjqy_Map(params) {
  return request({
    url: '/api/bigdata/ljqy_map',
    method: 'get',
    params
  })
}

// 获取垃圾填埋场/焚烧厂
export function getLjqy_Refuse_Plant(params) {
  return request({
    url: '/api/bigdata/ljqy_refuse_plant',
    method: 'get',
    params
  })
}

// 获取垃圾中转站
export function getLjqy_Refuse_Station(params) {
  return request({
    url: '/api/bigdata/ljqy_refuse_station',
    method: 'get',
    params
  })
}

// 清扫保洁达标情况-图表
export function getQsbjdb_Graph() {
  return request({
    url: '/api/bigdata/qsbjdb_graph', // temptemptemp
    method: 'get'
  })
}

// 清扫保洁达标情况-地图
export function getQsbjdb_Map(params) {
  return request({
    url: '/api/bigdata/qsbjdb_map',
    method: 'get',
    params
  })
}

// 清扫保洁覆盖情况-人和车_图表
export function getQsbjfg_Graph(params) {
  return request({
    url: '/api/bigdata/qsbjfg_graph',
    method: 'get',
    params
  })
}

// 清扫保洁覆盖情况-人和车_地图
export function getQsbjfg_Map(params) {
  return request({
    url: '/api/bigdata/qsbjfg_map',
    method: 'get',
    params
  })
}

// 垃圾清运2 流向图
export function getTrachClean2(params) {
  return request({
    url: '/api/bigdata/trachClean2',
    method: 'get',
    params
  })
}

// 垃圾清运2 覆盖物
export function getTrachClean2Overlay(params) {
  return request({
    url: '/api/bigdata/trachClean2/overlay',
    method: 'get',
    params
  })
}

// 公众服务_垃圾处理厂
export function getGarbagePlant6(params) {
  return request({
    url: '/api/bigdata/pub_svc/garbagePlant',
    method: 'get',
    params
  })
}

// 公众服务_公厕
export function getGarPubToilet(params) {
  return request({
    url: '/api/bigdata/pub_svc/toilet',
    method: 'get',
    params
  })
}

// 公众服务_转运站
export function getRefuseStation(params) {
  return request({
    url: '/api/bigdata/pub_svc/refuseStation',
    method: 'get',
    params
  })
}

// 案件数据
export function getEvent(params) {
  return request({
    url: '/api/bigdata/event',
    method: 'get',
    params
  })
}

// 标段地图
export function getSectionMap(params) {
  return request({
    url: '/api/bigdata/GetSectionMap',
    method: 'get',
    params
  })
}

// 标段各类型数量
export function getSectionCount(params) {
  return request({
    url: '/api/bigdata/GetSectionCount',
    method: 'get',
    params
  })
}

// 垃圾处理量、垃圾流向弹窗信息
export function getGarbageAmount(params) {
  return request({
    url: '/api/bigdata/GetGarbageAmount',
    method: 'get',
    params
  })
}

