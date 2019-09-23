<template>
  <div id="AppMap">地图</div>
</template>

<script>
import mapStyle from '_u/mapStyle.js'
import { getAreaMapData } from '@/api/Map'
import { trachClean2Overlay } from '@/api/overview'
// import { trachClean2, trachClean2Overlay } from '@/api/overview'
import { FechGetGarbageAmount } from '@/api/garbage'

export default {
  data() {
    return {
      areaObjList: {},
      mapAreaData: [], // 地区区信息
      mapRefusePlant: [] // 垃圾填埋场/焚烧厂
    }
  },
  mounted() {
    this.$nextTick().then(() => {
      this.initMap()
      // this.getMapData()
      // this.trachClean2Overlay()
    })
  },
  methods: {
    initMap() {
      console.log('初始化地图')
      // eslint-disable-next-line no-undef
      const map = (this.map = new BMap.Map('AppMap', {
        enableMapClick: false
      })) // 创建Map实例
      // eslint-disable-next-line no-undef
      map.centerAndZoom(new BMap.Point(114.12744, 22.64469), 12) // 初始化地图,设置中心点坐标和地图级别
      map.setMapStyleV2(mapStyle)
      map.disableScrollWheelZoom() // close
      // map.enableScrollWheelZoom() // open

      // 初始化地图,设置中心点坐标和地图级别
      // eslint-disable-next-line no-undef
      map.centerAndZoom(new BMap.Point(114.12744, 22.64469), 12)
      this.getBoundary(map)
    },
    getBoundary(map) {
      // eslint-disable-next-line no-undef
      const bdary = new BMap.Boundary()
      bdary.get('广东省深圳市', function(rs) {
        // 行政区域的点有多少个
        const count = rs.boundaries ? rs.boundaries.length ? rs.boundaries.length : [] : []
        let pointArray = []
        for (let i = 0; i < count; i++) {
          // eslint-disable-next-line no-undef
          const ply = new BMap.Polygon(rs.boundaries[i], {
            strokeColor: '#39efe3',
            fillColor: '#4b93ff',
            fillOpacity: 0.1,
            strokeWeight: 1,
            strokeOpacity: 1
          }) // 建立多边形覆盖物
          map.addOverlay(ply) // 添加覆盖物
          pointArray = pointArray.concat(ply.getPath())
        }
        map.setViewport(pointArray) // 调整视野
      })
    },
    getMapData() {
      getAreaMapData().then(res => {
        const result = res.data
        if (result.success) {
          this.areaList = [{ name: '深圳市', sysId: '' }]
          this.areaLineList = []
          let num = 0
          result.data.map((v1, i1) => {
            this.areaList.push({
              name: v1.name,
              sysId: v1.sysId
            })
            v1.points.map((v2, i2) => {
              this.areaLineList[num] = []
              v2.map((v3, i3) => {
                // eslint-disable-next-line no-undef
                this.areaLineList[num].push(new BMap.Point(v3.lng, v3.lat))
              })
              num++
            })
          })
          this.selectAreaName = '深圳市'
          this.drawArea(this.areaLineList)
        }
      })
    },
    drawArea(list) {
      // 文字偏移量
      // const offsetXY = [
      //   [50, 20], // 罗湖区
      //   [-50, 60], // 福田区
      //   [30, 30], // 南山区
      //   [-140, 30], // 盐田区
      //   [-100, 320], // 宝安区
      //   [-110, 320], // 龙岗区
      //   [10, 100], // 光明区
      //   [30, 140], // 龙华区
      //   [50, 80], // 大鹏新区
      //   [0, 140] // 坪山区
      // ]
      const obj = this.areaObjList
      // 绘制所有的行政区
      list.map((v, i) => {
        // eslint-disable-next-line no-undef
        obj[i] = new BMap.Polygon(v, {
          strokeColor: '#39efe3',
          fillColor: '#4b93ff',
          fillOpacity: 0.1,
          strokeWeight: 1,
          strokeOpacity: 1
        }) // 建立多边形覆盖物
        this.map.addOverlay(obj[i])
        // 设置每个区域的点击事件
        obj[i].addEventListener('click', e => {
          // 如果没有选中某个菜单 则不做处理
          console.log(e)
        })
      })
    },
    trachClean2Overlay() {
      trachClean2Overlay({ beginDate: '2019-09-06' }).then(({ data }) => {
        if (data.success) {
          const result = data.data
          const mapAreaData = []
          const mapRefusePlant = []
          for (const item of result) {
            if (item.type) {
              mapRefusePlant.push(item)
            } else {
              mapAreaData.push(item)
            }
          }
          this.setAreaIcon(mapAreaData)
          this.setPlantIcon(mapRefusePlant)
        } else {
          this.$message.warning(data.message)
        }
      })
    },
    // 设置区
    setAreaIcon(areaArr) {
      const obj = {}
      areaArr.map((v, i) => {
        const opts = {
          // 指定文本标注所在的地理位置
          // eslint-disable-next-line no-undef
          position: new BMap.Point(v.lng, v.lat),
          // eslint-disable-next-line no-undef
          offset: new BMap.Size(-40, -40) // 设置文本偏移量
        }
        // eslint-disable-next-line no-undef
        obj[i] = new BMap.Label(v.weight + '<br/>' + v.name, opts) // 创建文本标注对象
        obj[i].setStyle({
          cursor: 'pointer',
          width: '60px',
          height: '60px',
          textAlign: 'center',
          color: '#fff',
          fontSize: '18px',
          fontWeight: 'bold',
          border: '3px solid #35dbd4',
          borderRadius: '50%',
          backgroundColor: '#0e1c30'
        })
        this.map.addOverlay(obj[i])
        obj[i].onclick = function() {
          FechGetGarbageAmount({
            'dataRequest.sysId': v.guid,
            'dataRequest.beginDate': '2019-09-06'
          }).then(res => {
            console.log(res, '区域')
          })
        }
      })
    },
    // 设置填埋场/焚烧厂
    setPlantIcon(refusePlant) {
      const imgUrl1 = require('@/assets/overview/factory.png')
      refusePlant.map((v, i) => {
        // eslint-disable-next-line no-undef
        const siteIcon = new BMap.Icon(imgUrl1, new BMap.Size(40, 40), {
        // eslint-disable-next-line no-undef
          imageSize: new BMap.Size(40, 40)
        })
        // eslint-disable-next-line no-undef
        const marker2 = new BMap.Marker(new BMap.Point(v.lng, v.lat), {
          icon: siteIcon
        })
        // eslint-disable-next-line no-undef
        const label = new BMap.Label(v.name)
        label.setStyle({
          position: 'absolute',
          color: '#fff',
          fontSize: '18px',
          fontWeight: 'bold',
          backgroundColor: 'transparent',
          border: 'none'
        })
        // eslint-disable-next-line no-undef
        label.setOffset(new BMap.Size(40, 10))
        marker2.setLabel(label)
        this.map.addOverlay(marker2)
        marker2.onclick = function() {
          console.log(v, 'xx')
          let label = null
          var opts = {
            // eslint-disable-next-line no-undef
            position: new BMap.Point(v.lng, v.lat)
            // eslint-disable-next-line no-undef
            // offset: new BMap.Size(30, -30) // 设置文本偏移量
          }
          this.map.removeOverlay(label)
          const html = `<div class="radar"> DEV_TEST </div>`
          // eslint-disable-next-line no-undef
          label = new BMap.Label(
            html,
            opts
          )
          if (this.radar) return
          this.map.addOverlay(label)
          this.radar = 1
          setTimeout(() => {
            this.radar = 0
            this.map.removeOverlay(label)
          }, 2000)
        }
      })
    }
  }
}
</script>

<style lang="scss">
#AppMap {
  width: 100%;
  height: 100%;
  min-height: 37.5rem /* 600/16 */;
}

.radar {
  background: radial-gradient(center, rgba(0, 0, 0, 0.3) 50%, #195c8b 75%),
    repeating-radial-gradient(
      rgba(32, 255, 77, 0) 5.8%,
      rgba(32, 255, 77, 0) 18%,
      #03c3f4 18.6%,
      rgba(32, 255, 77, 0) 18.9%
    ),
    linear-gradient(
      90deg,
      rgba(32, 255, 77, 0) 49.5%,
      #03c3f4 50%,
      #03c3f4 50%,
      rgba(32, 255, 77, 0) 50.2%
    ),
    linear-gradient(
      0deg,
      rgba(32, 255, 77, 0) 49.5%,
      #03c3f4 50%,
      #03c3f4 50%,
      rgba(32, 255, 77, 0) 50.2%
    );
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid #03c3f4;
  overflow: hidden;
}
.radar:before {
  content: " ";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.radar:after {
  content: " ";
  display: block;
  background-image: linear-gradient(
    44deg,
    rgba(0, 255, 51, 0) 50%,
    #03c3f4 100%
  );
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  animation: radar-beam 2s infinite;
  animation-timing-function: linear;
  transform-origin: bottom right;
  border-radius: 100% 0 0 0;
}

@keyframes radar-beam {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
