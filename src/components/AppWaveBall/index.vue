<template>
  <div class="AppWaveBall">
    <div class="bruce flex-ct-x">
      <div class="state-ball">
        <div class="wave"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppWaveBall'
}
</script>

<style lang="scss" scoped>
.state-ball {
  overflow: hidden;
  position: relative;
  padding: 5px;
  border: 3px solid #2FD878;
  border-radius: 100%;
  width: 150px;
  height: 150px;
  background-color: #fff;

  &::before,

  &::after {
    position: absolute;
    left: 50%;
    top: 0;
    z-index: 20;
    margin-left: -100px;
    width: 200px;
    height: 200px;
    content: "";
  }

  &::before {
    margin-top: -150px;
    border-radius: 45%;
    background-color: rgba(#fff, 0.5);
    animation: rotate 10s linear -5s infinite;
  }

  &::after {
    margin-top: -160px;
    border-radius: 40%;
    background-color: rgba(#fff, 0.8);
    animation: rotate 15s infinite;
  }

  &.warning {
    border-color: #FAA529;
    .wave {
      background-image: linear-gradient(-180deg, #f0c78a 13%, #FAA529 91%);
    }
  }

  &.danger {
    border-color: #FF9B07;
    .wave {
      background-image: linear-gradient(-180deg, #f78989 13%, #FF9B07 91%);
    }
  }
}
.wave {
  position: relative;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-180deg, #af8 13%, #2FD878 91%);
}
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}
</style>
