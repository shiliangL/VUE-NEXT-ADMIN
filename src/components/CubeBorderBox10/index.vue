<template>
  <div class="CubeBorderBox10">
    <svg
      width="150px"
      height="150px"
      :key="item"
      v-for="item in border"
      :class="`${item} border`"
    >
      <polygon
        fill="#d3e1f8"
        points="40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"
      />
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CubeBorderBox10',
  data() {
    return {
      border: ['left-top', 'right-top', 'left-bottom', 'right-bottom']
    }
  }
}
</script>

<style lang="scss" scoped>
.CubeBorderBox10 {
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 25px 3px #1d48c4;
  border-radius: 6px;
}
.CubeBorderBox10 .border {
  position: absolute;
  display: block;
}
.CubeBorderBox10 .right-top {
  right: 0px;
  transform: rotateY(180deg);
}
.CubeBorderBox10 .left-bottom {
  bottom: 0px;
  transform: rotateX(180deg);
}
.CubeBorderBox10 .right-bottom {
  right: 0px;
  bottom: 0px;
  transform: rotateX(180deg) rotateY(180deg);
}
.CubeBorderBox10 .border-box-content {
  position: relative;
  width: 100%;
  height: 100%;
}

</style>
