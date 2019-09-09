<template>
  <ul class="FadeBg-box">
    <li v-for="(item, index) in siderList" :key="index"  :style="{backgroundImage: 'url(' + item + ')'}" />
  </ul>
</template>

<script>

import bg_01 from '@/assets/bg_img/bg_01.jpg'
import bg_02 from '@/assets/bg_img/bg_02.jpg'
import bg_03 from '@/assets/bg_img/bg_03.jpg'

export default {
  name: 'FadeBg',
  data() {
    return {
      siderList: [
        bg_01,
        bg_02,
        bg_03,
        bg_02
      ]
    }
  }
}
</script>

<style lang="scss">
.FadeBg-box {
  position: fixed;
  width: 100%;
  height: 100%;
  // background: #0086b3;
  top: 0px;
  left: 0px;
  z-index: 0;
  li {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    color: transparent;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: none;
    opacity: 0;
    z-index: 0;
    -webkit-backface-visibility: hidden;
    -webkit-animation: imageAnimation 48s linear infinite 0s;
    -moz-animation: imageAnimation 48s linear infinite 0s;
    -o-animation: imageAnimation 48s linear infinite 0s;
    -ms-animation: imageAnimation 48s linear infinite 0s;
    animation: imageAnimation 48s linear infinite 0s;

    &:nth-child(1) {
      // background-image: url(../../assets/bg-1.jpg);
    }
    &:nth-child(2) {
      // background-image: url(../../assets/bg-2.jpg);
      -webkit-animation-delay: 12s;
      -moz-animation-delay: 12s;
      -o-animation-delay: 12s;
      -ms-animation-delay: 12s;
      animation-delay: 12s;
    }
    &:nth-child(3) {
      // background-image: url(../../assets/bg-3.jpg);
      -webkit-animation-delay: 24s;
      -moz-animation-delay: 24s;
      -o-animation-delay: 24s;
      -ms-animation-delay: 24s;
      animation-delay: 24s;
    }
    &:nth-child(4) {
      // background-image: url(../../assets/bg-1.jpg);
      animation-delay: 36s;
    }
  }
}
@keyframes imageAnimation {
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }
  8% {
    opacity: 1;
    transform: scale(1.15);
    animation-timing-function: ease-out;
  }
  17% {
    opacity: 1;
    transform: scale(1.2);
  }
  25% {
    opacity: 0;
    transform: scale(1.4);
  }
  100% {
    opacity: 0;
  }
}
</style>
