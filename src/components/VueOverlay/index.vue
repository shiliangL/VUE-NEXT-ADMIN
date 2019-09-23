<template>
  <div class="VueOverlay">
    <i class="el-icon-close" @click="removueOverlay" />
    <slot></slot>
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
    point: {
      type: [String, Object, Array],
      default: () => ''
    },
    visible: {
      type: Boolean,
      default: () => false
    },
    map: {
      type: Object
    }
  },
  data() {
    return {
      myCompOverlay: null
    }
  },
  mounted() {
    this.$nextTick().then(_ => {
      this.init()
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
      update() {

      },
      unbind(el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__)
        delete el.__vueClickOutside__
      }
    }
  },
  methods: {
    init() {
      console.log(this.myCompOverlay, '当前覆盖是否存在')
      const { pane, $el, point, map } = this
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
        this._div.style.left = x + (this._x || 0) + 'px'
        this._div.style.top = y - (this._y || 0) + 'px'
        // console.log(this._div.clientWidth, '可视宽度')
        // console.log(this._div.clientHeight, '可视高度')
      }
      if (this.myCompOverlay) map.removeOverlay(this.myCompOverlay)
      this.myCompOverlay = new ComplexCustomOverlay(point)
      map.addOverlay(this.myCompOverlay)
    },
    update() {

    },
    removueOverlay() {
      const { map } = this
      if (this.myCompOverlay) {
        map.removeOverlay(this.myCompOverlay)
        this.$emit('update:visible', false)
      }
    },
    showOverlay() {
      console.log('显示')
    },
    hiedOverlay() {
      console.log('隐藏')
    }
  },
  watch: {
    point: {
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
.VueOverlay{
  .el-icon-close{
    color: #ffffff;
    top: 0;
    right: 0;
    position: absolute;
    font-size: 20px;
    z-index: 999999;
  }
}
</style>
