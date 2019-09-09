<template>
  <div class="dv-border-box-4" :ref="ref">
    <svg :class="`dv-border-svg-container ${reverse && 'dv-reverse'}`" :width="width" :height="height">
      <polyline
class="dv-bb4-line-1"
:points="`145, ${height - 5} 40, ${height - 5} 10, ${height - 35}
        10, 40 40, 5 150, 5 170, 20 ${width - 15}, 20`"/>
      <polyline
class="dv-bb4-line-2"
:points="`245, ${height - 1} 36, ${height - 1} 14, ${height - 23}
        14, ${height - 100}`" />
      <polyline class="dv-bb4-line-3" :points="`7, ${height - 40} 7, ${height - 75}`" />
      <polyline class="dv-bb4-line-4" :points="`28, 24 13, 41 13, 64`" />
      <polyline class="dv-bb4-line-5" :points="`5, 45 5, 140`" />
      <polyline class="dv-bb4-line-6" :points="`14, 75 14, 180`" />
      <polyline class="dv-bb4-line-7" :points="`55, 11 147, 11 167, 26 250, 26`" />
      <polyline class="dv-bb4-line-8" :points="`158, 5 173, 16`" />
      <polyline class="dv-bb4-line-9" :points="`200, 17 ${width - 10}, 17`" />
      <polyline class="dv-bb4-line-10" :points="`385, 17 ${width - 10}, 17`" />
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import autoResize from '@/minxin/autoResize'

export default {
  name: 'CubeBorderBox4',
  mixins: [autoResize],
  data() {
    return {
      ref: 'border-box-4'
    }
  },
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.dv-border-box-4 {
  position: relative;
  width: 100%;
  height: 100%;
}
.dv-border-box-4 .dv-reverse {
  transform: rotate(180deg);
}
.dv-border-box-4 .dv-border-svg-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.dv-border-box-4 .dv-border-svg-container polyline {
  fill: none;
}
.dv-border-box-4 .s#40B7DD {
  stroke: #40B7DD;
}
.dv-border-box-4 .sblue {
  stroke: rgba(0, 0, 255, 0.8);
}
.dv-border-box-4 .sw1 {
  stroke-width: 1;
}
.dv-border-box-4 .sw3 {
  stroke-width: 3px;
  stroke-linecap: round;
}
.dv-border-box-4 .dv-bb4-line-1 {
  stroke: #40B7DD;
  stroke-width: 1;
}
.dv-border-box-4 .dv-bb4-line-2 {
  stroke: rgba(0, 0, 255, 0.8);
  stroke-width: 1;
}
.dv-border-box-4 .dv-bb4-line-3 {
  stroke: #40B7DD;
  stroke-width: 3px;
  stroke-linecap: round;
}
.dv-border-box-4 .dv-bb4-line-4 {
  stroke: #40B7DD;
  stroke-width: 3px;
  stroke-linecap: round;
}
.dv-border-box-4 .dv-bb4-line-5 {
  stroke: #40B7DD;
  stroke-width: 1;
}
.dv-border-box-4 .dv-bb4-line-6 {
  stroke: rgba(0, 0, 255, 0.8);
  stroke-width: 1;
}
.dv-border-box-4 .dv-bb4-line-7 {
  stroke: rgba(0, 0, 255, 0.8);
  stroke-width: 1;
}
.dv-border-box-4 .dv-bb4-line-8 {
  stroke: rgba(0, 0, 255, 0.8);
  stroke-width: 3px;
  stroke-linecap: round;
}
.dv-border-box-4 .dv-bb4-line-9 {
  stroke: #40B7DD;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-dasharray: 100 250;
}
.dv-border-box-4 .dv-bb4-line-10 {
  stroke: rgba(0, 0, 255, 0.8);
  stroke-width: 1;
  stroke-dasharray: 80 270;
}
.dv-border-box-4 .border-box-content {
  position: relative;
  width: 100%;
  height: 100%;
}

</style>
