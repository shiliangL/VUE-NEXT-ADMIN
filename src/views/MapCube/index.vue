<template>
  <div id="MapCube">
    <VueOverlay :visible.sync="overlayVisible" v-if="overlayVisible" :map="map" :point="point">
      <div class="com-dialog-wrap">
        <span class="dot" />
        <span class="slashLine" />
        <div class="contentWrap">
          <span class="bottomLine" />
          <span class="leftTopLine" />
          <span class="rightMiddleLine" />
          <span class="rightBottomLine" />
          <div class="content">
            <div class="dialog_carInfo">
              <div class="left">
                <div class="topSection">
                  <span class="carNo">粤BV8730</span>
                  <span class="carType">多功能扫路车</span>
                </div>
                <div class="wrap">
                  <div class="fl">
                    <p class="category">驾驶员</p>
                    <p class="text">null</p>
                  </div>
                  <div class="fl">
                    <p class="category">联系方式</p>
                    <p class="text">null</p>
                  </div>
                </div>
                <div class="wrap">
                  <p class="category">企业</p>
                  <p classs="text">深圳市洁亚环保产业有限公司</p>
                </div>
                <div class="wrap">
                  <p class="category">标段</p>
                  <p class="text">大鹏区葵涌一体化标洁亚</p>
                </div>
                <div class="workTraceBox">
                  <h4>作业路线</h4>
                  <ul class="lists">
                    <li class="item">
                      1、&nbsp;null&nbsp;（null-null）&nbsp;
                      <span class="status normal">未知</span>
                    </li>
                  </ul>
                </div>
                <div class="actBox">
                  <span class="trace">轨迹回放</span>
                  <span class="followUP">车辆跟踪</span>
                  <span class="direct">指挥调度</span>
                </div>
              </div>
              <div class="right">
                <img
                  src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1569167636158&amp;di=2d39606a32882e0a86e11409e20afe17&amp;imgtype=0&amp;src=http%3A%2F%2Fphoto.16pic.com%2F00%2F61%2F86%2F16pic_6186109_b.jpg"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </VueOverlay>
  </div>
</template>

<script>
import mapStyle from '_u/mapStyle.js'
import VueOverlay from '_c/VueOverlay/index.vue'

export default {
  name: 'MapCube',
  components: {
    VueOverlay
  },
  data() {
    return {
      text: '',
      map: null,
      active: false,
      overlayVisible: false,
      clickBeijingShow: false,
      point: null,
      mapAreaData: [], // 地区区信息
      mapRefusePlant: [] // 垃圾填埋场/焚烧厂
    }
  },
  mounted() {
    this.$nextTick().then(() => {
      // this.initMap()
      this.initCubeMap()
      setTimeout(() => {
        this.text =
          '很好的开发体验很好的开发体验很好的开发体验很好的开发体验很好的开发体验'
      }, 2500)
      // eslint-disable-next-line no-undef
      // this.getMapData()
      // this.trachClean2Overlay()
    })
  },
  methods: {
    draw({ el, BMap, map }) {
      console.log(el, BMap, map)
      const pixel = map.pointToOverlayPixel(new BMap.Point(116.404, 39.915))
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    },
    clickBeijing() {
      console.log('xclickBeijing')
      this.clickBeijingShow = !this.clickBeijingShow
      this.text = '异步数据请求'

      setTimeout(() => {
        this.text =
          '很好的开发体验很好的开发体验很好的开发体验很好的开发体验很好的开发体验'
      }, 2500)
    },
    initCubeMap() {
      // eslint-disable-next-line no-undef
      const map = (this.map = new BMap.Map('MapCube', {
        enableMapClick: false
      })) // 创建Map实例
      // eslint-disable-next-line no-undef
      const point = new BMap.Point(116.41, 39.915)
      // eslint-disable-next-line no-undef
      const point2 = new BMap.Point(116.404, 39.915)
      // eslint-disable-next-line no-undef
      // eslint-disable-next-line no-undef
      const marker = new BMap.Marker(point)

      // eslint-disable-next-line no-undef
      const marker2 = new BMap.Marker(point2)
      // eslint-disable-next-line no-undef
      map.centerAndZoom(point, 15)
      map.setMapStyleV2(mapStyle)

      map.addOverlay(marker)

      map.addOverlay(marker2)

      marker.addEventListener('click', () => {
        // this.$refs['VueOverlay'].init()
        this.point = point
        this.overlayVisible = true

        // 图片加载完毕重绘infowindow
        // document.getElementById('imgDemo').onload = function() {
        //   infoWindow.redraw() // 防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
        // }
      })

      marker2.addEventListener('click', () => {
        // this.$refs['VueOverlay'].init()
        this.point = point2
        this.overlayVisible = true
        // 图片加载完毕重绘infowindow
        // document.getElementById('imgDemo').onload = function() {
        //   infoWindow.redraw() // 防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
        // }
      })
    },
    initMap() {
      console.log('初始化地图')
      // eslint-disable-next-line no-undef
      const map = (this.map = new BMap.Map('MapCube', {
        enableMapClick: false
      })) // 创建Map实例
      // eslint-disable-next-line no-undef
      map.centerAndZoom(new BMap.Point(114.12744, 22.64469), 12) // 初始化地图,设置中心点坐标和地图级别
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
          console.log('区域')
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
          const opts = {
            // eslint-disable-next-line no-undef
            position: new BMap.Point(v.lng, v.lat)
            // eslint-disable-next-line no-undef
            // offset: new BMap.Size(30, -30) // 设置文本偏移量
          }
          this.map.removeOverlay(label)
          const html = `<div class="radar"> DEV_TEST </div>`
          // eslint-disable-next-line no-undef
          label = new BMap.Label(html, opts)
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
#MapCube {
  width: 100%;
  height: 100%;
  min-height: 37.5rem /* 600/16 */;

  .garbageTipBox {
    cursor: pointer;
    // width: 10rem;
  }
}
</style>
