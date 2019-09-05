<template>
  <div id="AppMap">
地图
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick().then(() => {
      this.initMap()
    })
  },
  methods: {
    initMap() {
      // eslint-disable-next-line no-undef
      const map = new BMap.Map('AppMap')
      // eslint-disable-next-line no-undef
      const point = new BMap.Point(116.404, 39.915)
      // 创建点坐标
      map.centerAndZoom(point, 15)
      // 开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true)
      // eslint-disable-next-line no-undef
      map.addControl(new BMap.NavigationControl())
      // eslint-disable-next-line no-undef
      map.addControl(new BMap.ScaleControl())
      // eslint-disable-next-line no-undef
      map.addControl(new BMap.OverviewMapControl())
      // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
      // eslint-disable-next-line no-undef
      map.addControl(new BMap.MapTypeControl())
      map.setCurrentCity('北京')

      // 自定义控件

      // 1、 定义一个自定义控件的构造函数并继承Control
    }
  }
}
</script>

<style lang="scss" scoped>
#AppMap{
 width: 100%;
 height: 100%;
 min-height: 37.5rem /* 600/16 */;
}
</style>
