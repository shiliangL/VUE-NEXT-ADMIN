import request from '@/utils/request'

// 机械作业完成情况左右图表
export function JXZY_Graph(params) {
  return request({
    url: '/api/bigdata/jxzy_graph',
    method: 'get',
    params
  })
}

// 机械作业完成情况地图
export function JXZY_Map(params) {
  return request({
    url: '/api/bigdata/jxzy_map',
    method: 'get',
    params
  })
}

// 垃圾清运左右图表
export function LJQY_Graph(params) {
  return request({
    url: '/api/bigdata/ljqy_graph',
    method: 'get',
    params
  })
}

// 垃圾清运地图数据
export function LJQY_Map(params) {
  return request({
    url: '/api/bigdata/ljqy_map',
    method: 'get',
    params
  })
}

// 获取垃圾填埋场/焚烧厂
export function LJQY_Refuse_Plant(params) {
  return request({
    url: '/api/bigdata/ljqy_refuse_plant',
    method: 'get',
    params
  })
}

// 获取垃圾中转站
export function LJQY_Refuse_Station(params) {
  return request({
    url: '/api/bigdata/ljqy_refuse_station',
    method: 'get',
    params
  })
}

// 清扫保洁达标情况-图表
export function QSBJDB_Graph() {
  return request({
    url: '/api/bigdata/qsbjdb_graph?beginDate=2019-08-27', // temptemptemp
    method: 'get'
  })
}

// 清扫保洁达标情况-地图
export function QSBJDB_Map() {
  return request({
    url: '/api/bigdata/qsbjdb_map?beginDate=2019-08-27&endDate=2019-09-06',
    method: 'get'
  })
}

// 清扫保洁覆盖情况-人和车_图表
export function QSBJFG_Graph() {
  return request({
    url: '/api/bigdata/qsbjfg_graph?beginDate=2019-09-06',
    method: 'get'
  })
}

// 清扫保洁覆盖情况-人和车_地图
export function QSBJFG_Map() {
  return request({
    url: '/api/bigdata/qsbjfg_map?beginDate=2019-09-06',
    method: 'get'
  })
}

// 垃圾清运2 流向图
export function trachClean2(params) {
  return request({
    url: '/api/bigdata/trachClean2',
    method: 'get',
    params
  })
}

// 垃圾清运2 覆盖物
export function trachClean2Overlay(params) {
  return request({
    url: '/api/bigdata/trachClean2/overlay',
    method: 'get',
    params
  })
}

// 垃圾清运6
export function garbagePlant6(params) {
  return request({
    url: '/api/bigdata/pub_svc/garbagePlant',
    method: 'get',
    params
  })
}

// 垃圾清运6
export function garPubToilet(params) {
  return request({
    url: '/api/bigdata/pub_svc/toilet',
    method: 'get',
    params
  })
}

// 获取垃圾中转站
export function LJQY_RefuseStation() {
  return request({
    url: '/api/bigdata/ljqy_refuse_station?beginDate=2019-09-06',
    method: 'get'
  })
}
// 案件数据
export function queryEventData() {
  return request({
    url: '/api/bigdata/event?beginDate=2019-09-06',
    method: 'get'
  })
}

