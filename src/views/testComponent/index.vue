<template>
  <div class="TestComponent">
    <CubeScrollList v-if="false" />
    <TotalTaskChart />
  </div>
</template>

<script>
import CubeScrollList from '_c/CubeScrollList'
import TotalTaskChart from '../CubeScreen/ScreenLayout/TotalTaskChart'

export default {
  name: 'TestComponent',
  components: {
    CubeScrollList,
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
  background: #000625;

  padding: 5.625rem /* 90/16 */;

  .box{
    height: 200px;
  }
}
</style>
