<template>
  <div class="TestComponent">
    <CubeScrollList v-if="false" />

    <TotalTaskChart v-if="false" />

    <CubeSwiper />
  </div>
</template>

<script>
import CubeScrollList from '_c/CubeScrollList'
import TotalTaskChart from '../CubeScreen/ScreenLayout/TotalTaskChart'
import CubeSwiper from '../CubeScreen/ScreenLayout/CubeSwiper'

export default {
  name: 'TestComponent',
  components: {
    CubeScrollList,
    CubeSwiper,
    TotalTaskChart
  },
  data() {
    return {
      CubeProgress: 0
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.TestComponent {
  width: 100%;
  height: 100%;
background-image: linear-gradient(135deg, rgb(42, 49, 80) 0%, rgb(18, 26, 61) 75%);

  padding: 5.625rem /* 90/16 */;

  .box{
    height: 200px;
  }
}
</style>
