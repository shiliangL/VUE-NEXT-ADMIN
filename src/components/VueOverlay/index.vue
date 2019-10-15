<template>
  <!-- v-clickoutside="removueOverlay" -->
  <div class="VueOverlay">
    <i class="el-icon-close" @click="removueOverlay" />
    <div class="com-dialog-wrap">
      <span class="dot" />
      <span class="slashLine" />
      <div class="contentWrap">
        <span class="bottomLine" />
        <span class="leftTopLine" />
        <span class="rightMiddleLine" />
        <span class="rightBottomLine" />
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueOverlay',
  props: {
    pane: {
      // floatPane、markerMouseTarget、floatShadow、labelPane、markerPane、markerShadow、mapPane
      type: String,
      default: () => 'labelPane'
    },
    clickoutsideColse: {
      type: Boolean,
      default: () => false
    },
    point: {
      type: [String, Object, Array],
      default: () => ''
    },
    vueOverlayVisible: {
      type: Boolean,
      default: () => false
    },
    map: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      myCompOverlay: null
    }
  },
  mounted() {
    console.log(this.vueOverlayVisible)
    this.$nextTick().then(_ => {
      if (this.vueOverlayVisible) {
        this.init()
      }
    })
  },
  directives: {
    clickoutside: {
      bind(el, binding, vnode) {
        function documentHandler(e) {
          if (el.contains(e.target)) {
            return false
          }
          if (binding.expression) {
            binding.value(e)
          }
        }
        el.__vueClickOutside__ = documentHandler
        document.addEventListener('click', documentHandler)
      },
      update() {},
      unbind(el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__)
        delete el.__vueClickOutside__
      }
    }
  },
  methods: {
    init() {
      console.log(this.myCompOverlay, '当前覆盖是否存在')

      const { pane, $el, map, point } = this

      function ComplexCustomOverlay(point, $el) {
        this._point = point
        this._$el = $el
      }
      // eslint-disable-next-line no-undef
      ComplexCustomOverlay.prototype = new BMap.Overlay()
      ComplexCustomOverlay.prototype.initialize = function(map) {
        this._div = $el
        // eslint-disable-next-line no-undef
        this._div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat)
        this._div.style.position = 'absolute'
        map.getPanes()[pane].appendChild($el)
        return $el
      }
      ComplexCustomOverlay.prototype.draw = function() {
        const { x, y } = map.pointToOverlayPixel(this._point)
        this._div.style.position = 'absolute'
        // this._div.clientWidth / 2
        this._div.style.left = x + (this._x || 0) + 'px'
        this._div.style.top = y - this._div.clientHeight + (this._y || 0) + 'px'
        // console.log(this._div.clientWidth, '可视宽度')
        // console.log(this._div.clientHeight, '可视高度')
      }
      if (this.myCompOverlay) map.removeOverlay(this.myCompOverlay)
      this.myCompOverlay = new ComplexCustomOverlay(point)
      map.addOverlay(this.myCompOverlay)
    },
    update() {},
    removueOverlay() {
      const { map } = this
      if (this.myCompOverlay && this.vueOverlayVisible) {
        map.removeOverlay(this.myCompOverlay)
        this.$emit('update:vueOverlayVisible', false)
      }
    },
    clickoutsideToClose() {
      const { map, clickoutsideColse } = this
      if (!clickoutsideColse) return
      if (this.myCompOverlay && this.vueOverlayVisible) {
        map.removeOverlay(this.myCompOverlay)
        this.$emit('update:vueOverlayVisible', false)
      }
    },
    showOverlay() {
      console.log('显示')
    },
    hiedOverlay() {
      console.log('隐藏')
    }
  },
  beforeDestroy() {
    this.$emit('VueOverlayBeforeDestroy')
    console.log('组件销毁')
  },
  watch: {
    point: {
      handler(value) {
        if (value) {
          this.init()
        }
      }
    },
    vueOverlayVisible: {
      handler(value) {
        console.log(value)
        if (value) {
          this.init()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.VueOverlay {
  // position: relative;
  .el-icon-close {
    color: #ffffff;
    top: 0;
    right: 0;
    position: absolute;
    font-size: 20px;
    z-index: 999999;
  }
}
</style>

<style lang="scss">
/* 公用map点击弹窗 样式 （边框）公用样式 */
.com-dialog-wrap {
  position: relative;
  color: white;
  padding: 0.4rem;
  min-width: 11.25rem /* 180/16 */;
  min-height: 5rem /* 80/16 */;

  // /* 圆点 */
  // .dot {
  //   width: 0.12rem;
  //   height: 0.12rem;
  //   position: absolute;
  //   border-radius: 50%;
  //   left: -0.06rem;
  //   bottom: -0.06rem;
  //   background-color: rgb(28, 204, 249);
  // }

  /*斜线*/
  .slashLine {
    width: .625rem /* 10/16 */;
    height: .0625rem /* 1/16 */;
    position: absolute;
    left: -2px;
    bottom: 1px;
    background-color: #1cccf9;
    transform: rotate(-50deg);
  }

  .contentWrap {
    height: 100%;
    width: 100%;
    position: relative;
    padding: 0.1rem;
    border: 0.012rem solid #1cccf9;
    .bottomLine {
      width: 100%;
      height: 0.015rem;
      position: absolute;
      left: -0.1rem;
      bottom: -0.11rem;
      background-color: #1cccf9;
    }

    .leftTopLine {
      width: 0.6rem;
      height: 0.6rem;
      position: absolute;
      left: -0.01rem;
      top: -0.01rem;
      border-left: 0.04rem solid #1cccf9;
      border-top: 0.04rem solid #1cccf9;
    }

    .rightMiddleLine {
      width: 0.04rem;
      height: 0.3rem;
      position: absolute;
      right: -0.01rem;
      top: 0.3rem;
      background-color: #1cccf9;
    }

    .rightBottomLine {
      width: 1rem;
      height: 0.6rem;
      position: absolute;
      right: -0.01rem;
      bottom: -0.01rem;
      border-right: 0.04rem solid #1cccf9;
      border-bottom: 0.04rem solid #1cccf9;
    }
  }

  .content {
    height: 100%;
    width: 100%;
    padding: 0.1rem;
    font-size: 0.18rem;
    background-color: rgba(6, 154, 177, 0.8);
    > div {
      position: relative;
    }
    /* 关闭按钮 */
    .close {
      cursor: pointer;
      position: absolute;
      top: -0.31rem;
      right: -0.31rem;
      width: 0.3rem;
      height: 0.3rem;
      line-height: 0.32rem;
      background: #069ab1;
      border-radius: 50%;
      color: #fff;
      font-size: 0.4rem;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
