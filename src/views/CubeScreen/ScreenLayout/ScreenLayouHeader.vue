<template>
  <div class="CubeDataHader">
    <el-row>
      <el-col :sm="24" :md="12" :lg="10">
        <div class="title-left">
          <h1 v-text="config.title" />
          <h3 v-text="config.subTitle" />
        </div>
      </el-col>
      <el-col :sm="24" :md="12" :lg="14">
        <div class="title-right">
          <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
            <div class="card-panel-description">
              <h1 class="card-panel-text">任务总量</h1>
              <count-to
                :start-val="0"
                :end-val="taskData.total"
                :duration="2600"
                class="card-panel-num"
              />
            </div>
          </div>

          <div class="card-panel" @click="handleSetLineChartData('messages')">
            <div class="card-panel-description">
              <h1 class="card-panel-text">已完成</h1>
              <count-to
                :start-val="0"
                :end-val="taskData.complete"
                :duration="3000"
                class="card-panel-num"
              />
            </div>
          </div>

          <div class="card-panel" @click="handleSetLineChartData('purchases')">
            <div class="card-panel-description">
              <h1 class="card-panel-text">进行中</h1>
              <count-to
                :start-val="0"
                :end-val="taskData.going"
                :duration="3200"
                class="card-panel-num"
              />
            </div>
          </div>

          <div class="card-panel" @click="handleSetLineChartData('shoppings')">
            <div class="card-panel-description">
              <h1 class="card-panel-text">已逾期</h1>
              <count-to
                :start-val="0"
                :end-val="taskData.overTime"
                :duration="3600"
                class="card-panel-num"
              />
            </div>
          </div>

          <div class="card-panel" @click="handleSetLineChartData('shoppings')">
            <div class="card-panel-description">
              <h1 class="card-panel-text" v-text="datatime" />
              <div class="card-panel-num" v-text="time" />
            </div>
          </div>

          <div class="weather">
            <div class="weather-icon">
              <img :src="cond_txt_dIcon" style="width: 100%; height: 100%;" />
            </div>
            <!-- <div class="weather-text">温度</div> -->
          </div>
          <CubeDecoration10 v-if="false" class="cubeDecoration10" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import config from '../config'
import CountTo from 'vue-count-to'
import dayjs from 'dayjs'
import CubeDecoration10 from '_c/CubeDecoration10'

export default {
  name: 'ScreenLayouHeader',
  props: {
    taskList: {
      type: Object,
      required: true
    }
  },
  components: {
    CountTo,
    CubeDecoration10
  },
  data() {
    return {
      config,
      cond_txt_dIcon: 'https://cdn.heweather.com/cond_icon/100.png',
      timeInterval: null,
      datatime: dayjs().format('YYYY-MM-DD'),
      time: dayjs().format('HH:mm:ss'),
      taskData: {
        'total': 0,
        'complete': 0,
        'going': 0,
        'overTime': 0
      }
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
  watch: {
    taskList: {
      handler(value) {
        if (!value) return
        this.taskData = Object.assign(this.taskData, value)
      }
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
    h1 {
      padding: 0;
      margin: 0;
      font-weight: normal;
      display: inline-block;
      font-weight: 400;
      font-size: 2.625rem /* 42/16 */;
    }
    h3 {
      padding: 0;
      margin: 0;
      display: inline-block;
      font-weight: normal;
      padding-left: 0.625rem /* 10/16 */;
      font-size: 1.45rem;
      font-weight: 400;
    }
  }

  .title-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    .cubeDecoration10 {
      position: absolute;
      height: 0.625rem /* 10/16 */;
      right: 0;
      bottom: -1.125rem /* 18/16 */;
      width: 30.125rem /* 482/16 */;
    }

    .card-panel {
      padding-right: 1rem /* 16/16 */;
      cursor: pointer;
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
          font-size: 1.25rem /* 20/16 */;
          color: #126ffb;
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
