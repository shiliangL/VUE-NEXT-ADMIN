import request from '@/utils/request'

export function loginAct(userInfo) {
  let datastr = ''
  for (var item in userInfo) {
    datastr += '&' + item + '=' + userInfo[item]
  }
  datastr = 'grant_type=password' + datastr
  //  console.log(datastr);
  return request({
    url: '/oauth2/token',
    data: datastr,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'basic YXBwOmU5QzZsZ05PbFRWSXFkNWJy'
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/api/Userinfo',
    method: 'get'
    // params: {
    //   token
    // }
  })
}

export function logoutAct() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
