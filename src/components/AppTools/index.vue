<template>
  <div class="AppTools">
    <ul>
      <li @click="click">
        <svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'" />
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
    // this.$nextTick().then(_ => {
    //   setTimeout(() => {
    //     this.init()
    //   }, 2000)
    // })
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
        this.click()
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
  left: 0;
  z-index: 99999;
  height: 2.5rem /* 40/16 */;
  background: rgba(216, 191, 216, 0.16);
  border-radius: 0;
  margin-bottom: 0;
  border: none;
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
      width: 2.5rem /* 40/16 */;
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
  // &:hover {
  //   margin-left: 0px;
  // }
}
</style>
