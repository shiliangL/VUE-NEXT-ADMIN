<template>
  <cube-scroll
    ref="scroll"
    :options="options"
    :direction="direction"
    @pulling-down="onPullingDown"
    @pulling-up="onPullingUp"
  >
    <slot></slot>
  </cube-scroll>
</template>

<script>
export default {
  name: 'AppScroll',
  props: {
    // 滚动放行 vertical 纵向默认、
    // horizontal 横向
    direction: {
      type: String,
      default: () => 'vertical'
    }
  },
  methods: {
    onPullingDown () {

    },
    onPullingUp () {

    }
  }
}
</script>
