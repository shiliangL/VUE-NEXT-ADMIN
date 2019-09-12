<template>
  <div class="dv-decoration-4" :ref="ref">
    <div
      :class="`container ${reverse ? 'reverse' : 'normal'}`"
      :style="reverse ? `width:${width}px;height:5px` : `width:5px;height:${height}px;`"
    >
      <svg :width="reverse ? width : 5" :height="reverse ? 5 : height">
        <polyline
          :stroke="linestroke"
          :points="reverse ? `0, 2.5 ${width}, 2.5` : `2.5, 0 2.5, ${height}`"
        />
        <polyline
          class="bold-line"
          :stroke="linestroke"
          stroke-width="3"
          stroke-dasharray="20, 80"
          stroke-dashoffset="-30"
          :points="reverse ? `0, 2.5 ${width}, 2.5` : `2.5, 0 2.5, ${height}`"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import autoResize from '@/minxin/autoResize'

export default {
  name: 'CubeProgressbar',
  mixins: [autoResize],
  props: {
    linestroke: {
      type: String,
      default: () => '#49C4D6' || 'rgba(255, 255, 255, 0.3)'
    },
    reverse: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      ref: 'decoration-4'
    }
  }
}
</script>

<style lang="scss" scoped>

.dv-decoration-4 {
  position: relative;
  width: 100%;
  height: 100%;
}
.dv-decoration-4 .container {
  display: flex;
  overflow: hidden;
  position: absolute;
}
.dv-decoration-4 .normal {
  height: 0% !important;
  animation: ani-height 5s ease-in-out infinite;
  left: 50%;
  margin-left: -2px;
}
.dv-decoration-4 .reverse {
  width: 0% !important;
  animation: ani-width 5s ease-in-out infinite;
  top: 50%;
  margin-top: -2px;
}
@keyframes ani-height {
  70% {
    height: 100%;
  }
  100% {
    height: 100%;
  }
}
@keyframes ani-width {
  70% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
}

.CubeProgressbar {
  display: flex;
  align-items: center;
  .progress {
    width: 100%;
    overflow: hidden;
    box-shadow: inset 0 0.0625rem /* 1/16 */ 0.125rem /* 2/16 */
      rgba(0, 0, 0, 0.1);
    .progressbar {
      height: 100%;
      overflow: hidden;
      border-radius: 0.25rem /* 4/16 */;
      box-shadow: inset 0 -0.0625rem /* 1/16 */ 0 rgba(0, 0, 0, 0.15);
      transition: all 0.45 ease;
      background: #a307ba;
      background: #27c4f5 -webkit-gradient(linear, left top, right top, from(#27c4f5), color-stop(#a307ba), color-stop(#fd8d32), color-stop(#70c050), to(#27c4f5));
      background: #27c4f5 -webkit-linear-gradient(left, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5);
      background: #27c4f5
        linear-gradient(to right, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5);
      animation: 5s linear infinite ins, 0.78s ease-out insEnter;
      transition: opacity 0.4s ease-in-out;
      transform-origin: left;
      background-size: 500%;
      opacity: 1;
    }
  }
}

@-webkit-keyframes ins {
  0% {
    background-position: 0% 0;
  }
  to {
    background-position: 125% 0;
  }
}
@keyframes ins {
  0% {
    background-position: 0% 0;
  }
  to {
    background-position: 125% 0;
  }
}
@-webkit-keyframes insEnter {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}
@keyframes insEnter {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}
</style>
