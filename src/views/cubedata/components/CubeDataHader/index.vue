<template>
  <div class="CubeDataHader">
    <el-row>
      <el-col :sm="24" :md="12" :lg="10">
        <div class="title-left">
          <h1>POWER DATA</h1>
          <h3>智能任务看板</h3>
        </div>
      </el-col>
      <el-col :sm="24" :md="12" :lg="14">
        <div class="title-right">
          <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
            <div class="card-panel-description">
              <h1 class="card-panel-text">任务总量</h1>
              <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
            </div>
          </div>

          <div class="card-panel" @click="handleSetLineChartData('messages')">
            <div class="card-panel-description">
              <h1 class="card-panel-text">已完成</h1>
              <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num" />
            </div>
          </div>

          <div class="card-panel" @click="handleSetLineChartData('purchases')">
            <div class="card-panel-description">
              <h1 class="card-panel-text">进行中</h1>
              <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num" />
            </div>
          </div>

          <div class="card-panel" @click="handleSetLineChartData('shoppings')">
            <div class="card-panel-description">
              <h1 class="card-panel-text">已逾期</h1>
              <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />
            </div>
          </div>

          <div class="card-panel number-data-time" @click="handleSetLineChartData('shoppings')">
            <div class="card-panel-description">
              <h1 class="card-panel-text" v-text="datatime" />
              <div class="card-panel-num" v-text="time" />
            </div>
          </div>

          <div class="weather">
            <div class="weather-icon">
              <img :src="cond_txt_dIcon" style="width: 100%; height: 100%;" />
            </div>
            <div class="weather-text">温度</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import dayjs from 'dayjs'

export default {
  components: {
    CountTo
  },
  data() {
    return {
      cond_txt_dIcon: 'https://cdn.heweather.com/cond_icon/100.png',
      timeInterval: null,
      datatime: dayjs().format('YYYY-MM-DD'),
      time: dayjs().format('HH:mm:ss')
    }
  },
  mounted() {
    this.timeInterval = setInterval(() => {
      this.refreshTime()
    }, 1000)
  },
  methods: {
    handleSetLineChartData(e) {
      console.log(e)
    },
    refreshTime() {
      this.time = dayjs().format('HH:mm:ss')
    }
  },
  beforeDestroy() {
    clearInterval(this.timeInterval)
  }
}
</script>

<style lang="scss" scoped>
.CubeDataHader {
  .title-left {
    padding-top: 0.625rem /* 10/16 */;
    h1 {
      padding: 0;
      margin: 0;
      font-weight: normal;
      display: inline-block;
      font-weight: 500;
      font-size: 2rem /* 32/16 */;
    }
    h3 {
      padding: 0;
      margin: 0;
      display: inline-block;
      font-weight: normal;
      padding-left: 0.625rem /* 10/16 */;
      font-size: 0.875rem /* 14/16 */;
      font-weight: 500;
    }
  }

  .title-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .card-panel {
      padding-right: 1rem /* 16/16 */;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
      border-color: rgba(0, 0, 0, 0.05);

      .card-panel-description {
        font-weight: bold;
        margin-left: 0px;

        .card-panel-text {
          padding: 0;
          margin: 0;
          font-size: 1.125rem /* 18/16 */;
          color: #3390b1;
          font-weight: 500;
        }

        .card-panel-num {
          padding: 0;
          margin: 0;
          font-size: 1.5rem /* 24/16 */;
          font-weight: 500;
        }
      }
    }

    .weather {
      border-left: 1px solid #ffff;
      margin-left: 0.625rem /* 10/16 */;
      padding-left: 0.625rem /* 10/16 */;
      display: flex;
      align-items: center;
      justify-items: center;

      .weather-icon {
        width: 30px;
        height: 30px;
        overflow: hidden;
      }
      .weather-text {
        font-size: 12px;
      }
    }
  }
}
</style>
