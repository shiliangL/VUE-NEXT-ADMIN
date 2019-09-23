import request from '@/utils/request'

// 大图
// sysId, fileId 俩个必须要传, 缺一不可
export function getBigImageUrl(sysId, fileId) {
  return request({
    url: `/api/file/image/${sysId}/${fileId}`,
    method: 'get'
  })
}

// 预览图，默认 200*200
export function getThumbImageUrl(sysId, fileId) {
  return request({
    url: `/api/file/thumbImage/${sysId}/${fileId}`,
    method: 'get'
  })
}

// 预览图，默认 200*200 自定义宽高
export function getThumbImageWHUrl(sysId, fileId, thumbWidth, thumbHeight) {
  return request({
    url: `/api/file/thumbImage/${sysId}/${fileId}_${thumbWidth}_${thumbHeight}`,
    method: 'get'
  })
}

// 下载文件
export function getDownloadUrl(sysId, fileId) {
  return request({
    url: `/api/file/download/${sysId}/${fileId}`,
    method: 'get'
  })
}
