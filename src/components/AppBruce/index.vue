<template>
  <div class="AppBruce">
    <div class="bruce flex-ct-x">
      <div class="snakelike-border"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBruce'
}
</script>

<style lang="scss" scoped>
.snakelike-border {
  position: relative;
  width: 190px;
  height: 190px;
  background-color: burlywood;
  &::before,
  &::after {
    position: absolute;
    left: -5px;
    right: -5px;
    top: -5px;
    bottom: -5px;
    border: 5px solid;
    content: "";
    animation: move 10s linear infinite;
  }
  &::before {
    border-color: #0FC7AE;
  }
  &::after {
    border-color: #0FC7AE;
    animation-delay: -2.5s;
  }
}
@keyframes move {
  0%,
  100% {
    clip: rect(0 200px 5px 0);
  }
  25% {
    clip: rect(0 200px 200px 195px);
  }
  50% {
    clip: rect(195px 200px 200px 0);
  }
  75% {
    clip: rect(0 5px 200px 0);
  }
}
</style>
