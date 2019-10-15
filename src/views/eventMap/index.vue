<template>
  <div id="AppMap">
    地图应用
    <VueOverlay
      v-if="vueOverlayVisible"
      :map="map"
      :vueOverlayVisible.sync="vueOverlayVisible"
      :point="currentPoint"
    >
    <div style=" height: 180px;width: 80px;"> 测试 </div>
    </VueOverlay>
  </div>
</template>

<script>
import mapStyle from '_u/mapStyle.js'
import * as mapv from 'mapv'
// import { data } from '@/mock/areaMap'
// import eventData from '@/mock/eventData'
import trachCleanOverLay from '@/mock/trachCleanOverLay'
import directionOfGarbage from '@/mock/directionOfGarbage'

import VueOverlay from '_c/VueOverlay'

export default {
  name: 'EventMap',
  data() {
    return {
      map: null,
      currentPoint: null,
      vueOverlayVisible: false,
      trachCleanOverLay: {},
      areaObjList: {},
      mapAreaData: [],
      mapRefusePlant: []
    }
  },
  components: {
    VueOverlay
  },
  mounted() {
    this.$nextTick().then(() => {
      this.initMap()
      // this.draweventMarker(eventData.data)
      this.drawTrachCleanOverLayMarker(trachCleanOverLay.data)
      this.drawDirectionOfGarbage(directionOfGarbage.data)
    })
  },
  methods: {
    initMap() {
      console.log('初始化地图')
      // eslint-disable-next-line no-undef
      const map = (this.map = new BMap.Map('AppMap', {
        enableMapClick: false
      })) // 创建Map实例
      // 初始化地图,设置中心点坐标和地图级别
      // eslint-disable-next-line no-undef
      map.centerAndZoom(new BMap.Point(114.12744, 22.64469), 12)
      map.setMapStyleV2(mapStyle)
      // eslint-disable-next-line no-undef
      // map.setMapType('BMAP_PERSPECTIVE_MAP')
      // map.disableScrollWheelZoom() // close
      map.enableScrollWheelZoom() // open
      // 初始化地图,设置中心点坐标和地图级别
      // eslint-disable-next-line no-undef
      this.getBoundary(map)
      console.log(map.getZoom())

      map.addEventListener('click', this.getClickPoint)
      // 画深圳
      // this.drawArea(data)
    },
    // 获取点击地图坐标
    getClickPoint(e) {
      const { point } = e
      // eslint-disable-next-line no-undef
      this.currentClikcPoint = new BMap.Point(point.lng, point.lat)
      console.log('鼠标单击地方的经纬度为：', e.point.lng + ',' + e.point.lat)
      console.log(this.currentClikcPoint, 'xxx')
    },
    getBoundary(map) {
      // eslint-disable-next-line no-undef
      const bdary = new BMap.Boundary()
      bdary.get('广东省深圳市', function(rs) {
        // 行政区域的点有多少个
        const count = rs.boundaries
          ? rs.boundaries.length
            ? rs.boundaries.length
            : []
          : []
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
      const obj = {}
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
        obj[i].disableMassClear()
        this.map.addOverlay(obj[i])
        // 设置每个区域的点击事件
        obj[i].addEventListener('click', e => {
          console.log('区域')
        })
      })
    },
    // 设置填埋场/焚烧厂
    drawTrachCleanOverLayMarker(list) {
      const imgUrl = require('@/assets/overview/factory.png')
      list.map((v, i) => {
        // eslint-disable-next-line no-undef
        const siteIcon = new BMap.Icon(imgUrl, new BMap.Size(40, 40), {
          // eslint-disable-next-line no-undef
          imageSize: new BMap.Size(40, 40)
        })
        // eslint-disable-next-line no-undef
        this.trachCleanOverLay[i] = new BMap.Marker(
          // eslint-disable-next-line no-undef
          new BMap.Point(v.lng, v.lat),
          {
            icon: v.type ? siteIcon : null
          }
        )

        this.trachCleanOverLay[i].setZIndex(9999999999)

        const text = !v.type ? v.name + v.weight + '吨' : v.name
        // eslint-disable-next-line no-undef
        const label = new BMap.Label(text)

        label.setStyle({
          position: 'absolute',
          color: '#fff',
          zIndex: 9999999999,
          fontSize: '14px',
          fontWeight: 'bold',
          backgroundColor: 'transparent',
          border: 'none'
        })

        // eslint-disable-next-line no-undef
        label.setOffset(new BMap.Size(40, 10))

        this.trachCleanOverLay[i].setLabel(label)

        this.map.addOverlay(this.trachCleanOverLay[i])

        this.trachCleanOverLay[i].onclick = e => {
          // e.preventDefault()
          e.domEvent.stopPropagation()
          this.setIconTips(v)
        }
      })
    },
    drawDirectionOfGarbage(list) {
      const lineData = []
      const pointData = []
      const textData = []
      const timeData = []
      const roadData = list

      // 构造数据
      for (let i = 0; i < roadData.length; i++) {
        const coo = roadData[i]
        const fromCenter = { lat: coo.sy, lng: coo.sx }
        const toCenter = { lat: coo.zy, lng: coo.zx }
        if (!fromCenter || !toCenter) {
          continue
        }

        pointData.push({
          geometry: {
            type: 'Point',
            coordinates: [fromCenter.lng, fromCenter.lat]
          }
        })
        pointData.push({
          geometry: {
            type: 'Point',
            coordinates: [toCenter.lng, toCenter.lat]
          }
        })
        textData.push({
          geometry: {
            type: 'Point',
            coordinates: [fromCenter.lng, fromCenter.lat]
          },
          text: coo.zn
        })
        textData.push({
          geometry: {
            type: 'Point',
            coordinates: [toCenter.lng, toCenter.lat]
          },
          text: coo.sn
        })
        const curve = mapv.utilCurve.getPoints([fromCenter, toCenter])
        for (let j = 0; j < curve.length; j++) {
          timeData.push({
            geometry: {
              type: 'Point',
              coordinates: curve[j]
            },
            count: 1,
            time: j
          })
        }

        lineData.push({
          geometry: {
            type: 'LineString',
            coordinates: curve
          },
          start: coo.sn,
          end: coo.zn,
          lineid: 'lineid',
          count: 30 * Math.random()
        })
      }

      const lineDataSet = new mapv.DataSet(lineData)

      const lineOptions = {
        strokeStyle: '#fff',
        shadowColor: '#fff',
        shadowBlur: 1,
        lineWidth: 4,
        zIndex: 100,
        draw: 'simple',
        methods: {
          click: item => {
            console.log(item, '线条苗条')
            if (item) {
              this.setLineTips(item)
            }
          }
        }
      }

      // eslint-disable-next-line new-cap
      this.lineLayer = new mapv.baiduMapLayer(
        this.map,
        lineDataSet,
        lineOptions
      )

      const pointOptions = {
        fillStyle: '#fff',
        shadowColor: '#fff',
        shadowBlur: 1,
        size: 4,
        zIndex: 10,
        draw: 'simple'
      }

      const pointDataSet = new mapv.DataSet(pointData)
      // eslint-disable-next-line new-cap
      this.pointLayer = new mapv.baiduMapLayer(
        this.map,
        pointDataSet,
        pointOptions
      )

      const timeDataSet = new mapv.DataSet(timeData)

      const timeOptions = {
        fillStyle: 'rgba(255, 250, 250, 0.5)',
        globalCompositeOperation: 'lighter',
        zIndex: 200,
        size: 5,
        animation: {
          type: 'time',
          stepsRange: {
            start: 0,
            end: 100
          },
          trails: 3,
          duration: 3
        },
        draw: 'simple'
      }
      // eslint-disable-next-line new-cap
      this.timeMapvLayer = new mapv.baiduMapLayer(
        this.map,
        timeDataSet,
        timeOptions
      )
    },
    setLineTips(item) {
      this.vueOverlayVisible = true
      // eslint-disable-next-line no-undef
      this.currentPoint = this.currentClikcPoint
      console.log(item, '点击了线条')
    },
    setIconTips(v) {
      if (this.isScanning) {
        this.map.removeOverlay(this.isScanning)
        this.isScanning = null
      }

      // eslint-disable-next-line no-undef
      this.map.centerAndZoom(new BMap.Point(v.lng, v.lat), 16)
      const html = '<div class="radar"></div>'
      // eslint-disable-next-line no-undef
      this.isScanning = new BMap.Label(html, {
      // eslint-disable-next-line no-undef
        position: new BMap.Point(v.lng, v.lat)
      })
      this.map.addOverlay(this.isScanning)

      // this.vueOverlayVisible = true
      // // eslint-disable-next-line no-undef
      // this.currentPoint = new BMap.Point(v.lng, v.lat)
      // console.log(v, '点击了覆盖物')
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
        obj[i].onclick = () => {}
      })
    },
    draweventMarker(refusePlant) {
      const iconTypeObj = {
        1: require('@/assets/overview/e_start_03.png'), // red
        2: require('@/assets/overview/e_start_04.png'), // yellow
        3: require('@/assets/overview/e_start_01.png') // green
      }
      refusePlant.map((v, i) => {
        const eventIcon = iconTypeObj[v.iconType]
          ? iconTypeObj[v.iconType]
          : iconTypeObj[3]
        // eslint-disable-next-line no-undef
        const siteIcon = new BMap.Icon(eventIcon, new BMap.Size(40, 40), {
          // eslint-disable-next-line no-undef
          imageSize: new BMap.Size(40, 40)
        })
        // eslint-disable-next-line no-undef
        const eventMarker = new BMap.Marker(new BMap.Point(v.lng, v.lat), {
          icon: siteIcon
        })
        this.map.addOverlay(eventMarker)

        var html = [
          "<div class='infoBoxContent'><div class='title'><strong>中海雅园" +
            v.name +
            '</strong></div>',
          "<div class='list'><ul><li><div class='left'> 图片 </div><div class='left'><a target='_blank' href='http://map.baidu.com'>中海雅园南北通透四居室</a><p>4室2厅，205.00平米，3层</p></div><div class='rmb'>760万</div></li>",
          "<li><div class='left'> 图片 </div><div class='left'><a target='_blank' href='http://map.baidu.com'>中海雅园四居室还带保姆间</a><p>2室1厅，112.00平米，16层</p></div><div class='rmb'>300万</div></li>",
          "<li><div class='left'> 图片 </div><div class='left'><a target='_blank' href='http://map.baidu.com'>《有钥匙 随时看》花园水系</a><p>3室2厅，241.00平米，16层</p></div><div class='rmb'>400万</div></li>",
          "<li><div class='left'> 图片 </div><div class='left'><a target='_blank' href='http://map.baidu.com'>富力城D区正规楼王大三居</a><p>3室3厅，241.00平米，17层</p></div><div class='rmb'>600万</div></li>",
          '</ul></div>',
          '</div>'
        ]

        // eslint-disable-next-line no-undef
        const infoBox = new BMapLib.InfoBox(this.map, html.join(''), {
          boxStyle: {
            width: '270px',
            height: '300px'
          },
          closeIconMargin: '1px 1px 0 0',
          enableAutoPan: true,
          closeIconUrl: '关闭',
          // eslint-disable-next-line no-undef
          align: INFOBOX_AT_TOP
        })

        eventMarker.onclick = () => {
          infoBox.open(eventMarker)
        }
      })
    }
  },
  beforeDestroy() {
    this.map.removeEventListener('click', this.getClickPoint)
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

<style>
.infoBoxContent {
  font-size: 12px;
  background: #fff;
}
.infoBoxContent .title {
  height: 42px;
  width: 272px;
}
.infoBoxContent .title strong {
  font-size: 14px;
  line-height: 42px;
  padding: 0 10px 0 5px;
}
.infoBoxContent .title .price {
  color: #ffff00;
}
.infoBoxContent .list {
  width: 268px;
  border: solid 1px #4fa5fc;
  border-top: none;
  background: #fff;
  height: 260px;
}
.infoBoxContent .list ul {
  margin: 0;
  padding: 5px;
  list-style: none;
}
.infoBoxContent .list ul li {
  float: left;
  width: 255px;
  border-bottom: solid 1px #4fa5fc;
  padding: 2px 0;
}
.infoBoxContent .list ul .last {
  border: none;
}
.infoBoxContent .list ul img {
  width: 53px;
  height: 42px;
  margin-right: 5px;
}
.infoBoxContent .list ul p {
  padding: 0;
  margin: 0;
}
.infoBoxContent .left {
  float: left;
}
.infoBoxContent .rmb {
  float: right;
  color: #eb6100;
  font-size: 14px;
  font-weight: bold;
}
.infoBoxContent a {
  color: #0041d9;
  text-decoration: none;
}
</style>
