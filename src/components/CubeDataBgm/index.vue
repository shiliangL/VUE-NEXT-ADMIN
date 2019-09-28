<template>
  <vue-particles
    color="#6495ED"
    :particleOpacity="0.2"
    :particlesNumber="50"
    shapeType="circle"
    :particleSize="4"
    linesColor="#6495ED"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.6"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="false"
    clickMode="push"
  />
</template>

<script>
export default {
  name: 'Particles'
}
</script>

<style>
#particles-js {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
}
</style>
