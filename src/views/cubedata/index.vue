<template>
  <div class="CubeData">
    <div class="CubeData-warp">
      <CubeDataHader />
      <CubeDataCard/>
      <CubeDataMain />
    </div>
    <!-- <CubeDataBgm /> -->
  </div>
</template>

<script>
import CubeDataHader from './components/CubeDataHader'
import CubeDataMain from './components/CubeDataMain'
import CubeDataCard from './components/CubeDataCard'
// import CubeDataBgm from './components/CubeDataBgm'

export default {
  name: 'CubeData',
  components: {
    CubeDataHader,
    CubeDataMain,
    CubeDataCard
    // CubeDataBgm
  }
}
</script>

<style lang="scss" scoped>
.CubeData {
  color: #ffff;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: 99999;
  background-image: linear-gradient(
    135deg,
    rgb(19, 26, 61) 0%,
    rgb(11, 1, 19) 75%
  );
  .CubeData-warp {
    padding: 0.625rem /* 10/16 */ 1.875rem /* 30/16 */;
  }
}
</style>
