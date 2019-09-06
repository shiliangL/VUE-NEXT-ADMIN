<template>
  <div class="AppTools">
    <ul>
      <li>
        <svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'" @click="click" />
      </li>
      <li>
        <i class="el-icon-arrow-right"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'AppTools',
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    click() {
      if (!screenfull.enabled) {
        this.$message({
          message: '您的浏览器不支持全屏功能,请使用谷歌浏览器',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style lang="scss">
.AppTools {
  position: absolute;
  z-index: 99999;
  height: 50px;
  background: rgba(216, 191, 216, 0.16);
  border-radius: 0;
  margin-bottom: 0;
  border: none;
  margin-left: -50px;
  transition: margin-left 0.45s;

  ul {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    li {
      cursor: pointer;
      padding: 0;
      margin: 0;
      float: left;
      width: 50px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:focus {
        background: #3498da;
      }
      &:hover {
        background: #3f9eff;
      }
    }
  }
  &:hover {
    margin-left: 0px;
  }
}
</style>
