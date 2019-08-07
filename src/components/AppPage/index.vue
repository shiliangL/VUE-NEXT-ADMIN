<template>
  <div class="app-page" :class="type">
    <header class="header">
      <h1>{{ title }}</h1>
      <i v-if="backAction" class="cubeic-back" @click="back" />
    </header>
    <div class="wrapper">
      <section v-if="desc" class="desc">
        <slot name="desc" />
      </section>
      <main class="content">
        <slot name="content" />
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppPage',
  props: {
    title: {
      type: String,
      default: () => ''
    },
    type: {
      type: String,
      default: () => ''
    },
    backAction: {
      type: Boolean,
      default: () => true
    },
    desc: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
// 基本页面
.app-page {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .header {
    position: relative;
    height: 2.75rem /* 44/16 */;
    line-height: 2.75rem /* 44/16 */;
    text-align: center;
    background-color: #edf0f4;
    box-shadow: 0 0.0625rem 0.375rem #ccc;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 5;

    h1 {
      font-size: 1rem /* 16/16 */;
      font-weight: 700;
    }

    .cubeic-back {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0 0.9375rem /* 15/16 */;
      color: #fc9153;
    }
  }

  > .wrapper {
    height: calc(100% - 2.75rem);
    overflow-x: hidden;
    overflow-y: auto;

    .desc {
      padding: 0.625rem /* 10/16 */;
      margin: 0.625rem /* 10/16 */ 0;
      line-height: 1.25rem /* 20/16 */;
      font-size: 0.875rem /* 14/16 */;
    }

    .content {
      margin: 0.625rem /* 10/16 */;
    }
  }
}
</style>

