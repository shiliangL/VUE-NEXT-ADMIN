<template>
  <div class="CubeDataCard">
    <el-row :gutter="10">
      <el-col :span="7">
        <div class="CubeDataCard-item">
          <DataBoxCard title="总体进度" class="bg_box" :dheight="220">
            <div class="ring-chart">

            </div>
          </DataBoxCard>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="CubeDataCard-item">
          <DataBoxCard title="工作量统计" :dheight="220">
            <div class="progress-box">
              <div class="progress-box-item">
                <span>小陈</span>
                <el-progress class="progress" :percentage="20" :color="customColor"></el-progress>
              </div>
              <div class="progress-box-item">
                <span>小陈</span>
                <el-progress class="progress" :percentage="20" :color="customColor"></el-progress>
              </div>
            </div>
          </DataBoxCard>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="CubeDataCard-item">
          <DataBoxCard title="工作评级" :dheight="220">
            <div class="carousel-sider">
              <el-carousel
                indicator-position="none"
                height="210px"
                direction="vertical"
                :autoplay="false"
              >
                <el-carousel-item v-for="item in 30" :key="item">
                  <div class="list-item-li-row" v-for="k in 3" :key="k">
                    <div class="imgs"></div>
                    <div class="name">小明 {{ item }}</div>
                    <div>
                      <el-rate v-model="rateValue" disabled />
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </DataBoxCard>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DataBoxCard from '_c/DataBoxCard'
export default {
  name: 'CubeDataCard',
  components: {
    DataBoxCard
  },
  data() {
    return {
      extend: {
        legend: {
          textStyle: { color: '#fff' }
        },
        grid: {
          textStyle: {
            color: '#fff'
          }
        },
        series: {
          radius: ['0', '70%'],
          center: ['50%', '62%']
        }
      },
      rateValue: 4,
      customColor: '#409eff',
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ],
      ringChartData: {
        columns: ['项目', '进度'],
        rows: [
          { 项目: '5G基站推进', 进度: 20 },
          { 项目: '大楼布线', 进度: 50 },
          { 项目: 'UPS组电池更新', 进度: 47 }
        ]
      }
    }
  },
  mounted() {},
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return '#909399'
      } else if (percentage < 70) {
        return '#e6a23c'
      } else {
        return '#67c23a'
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
    // background: #0b0012;
    .ring-chart {
    }

    .carousel-sider {
      padding: 0.625rem /* 10/16 */;

      .list-item-li-row {
        display: flex;
        align-items: center;
        margin: 0.375rem /* 6/16 */;

        .imgs {
          width: 2.5rem /* 40/16 */;
          height: 2.5rem /* 40/16 */;
          border-radius: 50%;
          background: #fff;
        }
        .name {
          padding-left: 0.375rem /* 6/16 */;
        }
      }
    }

    .progress-box {
      display: flex;
      align-items: center;
      .progress-box-item {
        flex: 1;
        // display: flex;
        // align-items: center;
      }
    }
  }
}
</style>
