<template>
  <div class="CubeDataCard">
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="CubeDataCard-item">
          <DataBoxCard title="总体进度" :dheight="220">
            <div class="ring-chart">
              <ve-ring :data="ringChartData"></ve-ring>
            </div>
          </DataBoxCard>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="CubeDataCard-item">
          <DataBoxCard title="工作量统计" :dheight="220">主要区域测试</DataBoxCard>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="CubeDataCard-item">
          <DataBoxCard title="工作评级" :dheight="220">
            <el-carousel
              indicator-position="none"
              height="210px"
              direction="vertical"
              :autoplay="true"
            >
              <el-carousel-item v-for="item in 30" :key="item">
                <h3 class="medium">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </DataBoxCard>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DataBoxCard from '_c/DataBoxCard'
import VeRing from 'v-charts/lib/ring.common'
export default {
  name: 'CubeDataCard',
  components: {
    DataBoxCard,
    VeRing
  },
  data() {
    return {
      ringChartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1393 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 1723 },
          { 日期: '1/5', 访问用户: 3792 },
          { 日期: '1/6', 访问用户: 4593 }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.CubeDataCard {
  margin-bottom: 1.375rem /* 22/16 */;
  margin-top: 1.375rem /* 22/16 */;
  .CubeDataCard-item {
    background: #0b0012;
  }
}
</style>
