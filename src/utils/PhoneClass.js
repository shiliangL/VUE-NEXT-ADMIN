
export default class PhoneClass {
  constructor() {
    this._video = null
  }

  init(opts = {}) {
    const params = Object.assign(opts, {
      id: 'MMVideo',
      url: 'wss://videostream.car900.com/',
      key: '2161e23a-4d3b-4d1a-bf0a-cafd56f9c6f8'
    })

    if (this._video) {
      this._video.destroy && this._video.destroy()
    }
    // eslint-disable-next-line no-undef
    this._video = new byskplayer({
      id: params.id,
      isLive: true,
      userId: 'apidemo',
      userkey: params.key,
      baseURL: params.url
    })
    this._video.setPlayerNum(1)
  }

  load(opts) {
    this.init(opts)
  }

  startTalke(carNo, callback) {
    var device = Number(carNo)
    console.log(carNo, '----------设备号----------')
    var protocolType = 1
    var params = {
      device: device,
      protocolType: protocolType
    }
    this._video.real.openSpeak(params,
      res => {
        if (res.status === 1) {
          console.log('连接成功')
          if (typeof (callback) === 'function') {
            callback({ status: 1, msg: '连接成功' })
          }
        } else {
          callback({ status: 0, msg: res.info })
        }
      })
  }

  stopTalke(carNo, callback) {
    var device = Number(carNo)
    console.log(carNo, '----------设备号----------')
    var protocolType = 1
    var params = {
      device: device,
      protocolType: protocolType
    }
    this._video.real.closeSpeak(params,
      res => {
        if (res.status === 1) {
          console.log('关闭通话成功')
          if (typeof (callback) === 'function') {
            callback({ status: 1, msg: '连接成功' })
          }
        } else {
          callback({ status: 0, msg: res.info })
        }
      })
  }
}

