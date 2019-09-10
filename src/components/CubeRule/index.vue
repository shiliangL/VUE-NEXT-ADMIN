<template>
  <div class="container">
    <!-- <CbueBorderBox8 v-if="isCbueBorderBox"> -->
    <div class="ruler_container">
      <div class="tasks-item">
        <div class="tasks-item-name">
          <div class="titleName">{{ defaultData.name }}</div>
          <div class="progress">完成 {{ defaultData.progress }} %</div>
          <div class="complete">计划完成: {{ defaultData.end | completeData }}</div>
        </div>
        <div class="tasks-item-right" ref="CubeRuleBox">
          <div
            class="row-task-item-wrap"
            v-for="(k,i) in defaultData.children"
            :style="renderTaskStyle(defaultData,k)"
            :key="i"
          >
            <div class="progressText">{{ k.name + k.progress + '%' }}</div>
            <div class="progress-bar">
              <div class="progress" :style="renderStyle(k)" />
            </div>
          </div>

          <div class="rule-k">
            <div class="startTime">{{ defaultData.start | formatTime }}</div>
            <div class="endTime">{{ defaultData.end | formatTime }}</div>
            <div v-for="(item, index) in tempInterval" :key="index" class="line" />
          </div>
        </div>
      </div>
    </div>
    <!-- </CbueBorderBox8> -->
  </div>
</template>

<script>
import dayjs from 'dayjs'
// import CbueBorderBox8 from '_c/CbueBorderBox8'

export default {
  name: 'CubeRule',
  components: {
    // CbueBorderBox8
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    isCbueBorderBox: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      defaultData: {
        id: '',
        name: '',
        start: '',
        end: '',
        progress: 0,
        dependencies: '',
        custom_class: '',
        children: []
      },
      renderwidth: '',
      tempInterval: []
    }
  },
  filters: {
    formatTime(value) {
      if (!value) return ''
      return dayjs(value).format('MM-DD')
    },
    completeData(value) {
      if (!value) return ''
      return dayjs(value).format('YYYY年-MM月')
    }
  },
  mounted() {
    this.renderList()
  },
  methods: {
    renderList() {
      this.defaultData = Object.assign(this.defaultData, this.data)
    },
    renderDom() {
      this.$nextTick().then(() => {
        this.renderwidth = this.$refs['CubeRuleBox'][0].offsetWidth
        console.log(this.renderwidth)
      })
    },
    renderTaskStyle(item, key) {
      const totalStart = dayjs(item.start)
      const totalEnd = dayjs(item.end)
      // 总时间
      const tempInterval = Math.abs(totalStart.diff(totalEnd, 'day')) + 1
      this.tempInterval = tempInterval
      console.log(tempInterval, '总时间/天')

      const keyTotalStart = dayjs(key.start)
      const keyTotalEnd = dayjs(key.end)
      const keyTempInterval =
        Math.abs(keyTotalStart.diff(keyTotalEnd, 'day')) + 1

      console.log(keyTempInterval, '任务时间/天')
      const t1 = (keyTempInterval / tempInterval) * 100

      console.log(t1, '占总时间%')
      const p1 = Math.abs(totalStart.diff(keyTotalStart, 'day'))
      console.log(p1, '偏移')

      return {
        width: t1 + '%',
        marginLeft: (p1 / tempInterval) * 100 + '%'
      }
    },
    renderStyle(item) {
      const bg = item.progress ? item.progressColor ? item.progressColor : '#2F73FB' : null
      return {
        width: item.progress + '%',
        background: bg
      }
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  padding: 1.25rem /* 20/16 */;
  color: #fff;
  .tasks-item {
    position: relative;
    border: 1px solid #2e82a0;
    padding: 1.25rem /* 20/16 */;
    border-radius: 0.625rem /* 10/16 */;
    display: flex;
    align-items: center;

    .tasks-item-name {
      width: 11.25rem /* 180/16 */;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .titleName {
        font-weight: 400;
        font-size: 1.375rem /* 22/16 */;
      }
      .progress {
        padding: 0.25rem /* 4/16 */ 0;
        font-weight: 400;
        font-size: 1.125rem /* 18/16 */;
      }
      .complete {
        font-size: 1rem /* 16/16 */;
      }
    }
    .tasks-item-right {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      position: relative;
      flex: 1;
      margin: 0 3.125rem /* 50/16 */;
      .rule-k {
        position: absolute;
        display: flex;
        justify-content: space-between;
        left: 0;
        bottom: -0.625rem /* 10/16 */;
        height: 0.0625rem /* 1/16 */;
        width: 100%;
        background: #3ce0e6;

        .startTime {
          position: absolute;
          left: -3.125rem /* 50/16 */;
          top: -0.875rem /* 14/16 */;
        }
        .endTime {
          position: absolute;
          top: -0.875rem /* 14/16 */;
          right: -3.125rem /* 50/16 */;
        }

        &::before {
          position: absolute;
          left: 0;
          top: -0.625rem /* 10/16 */;
          content: "";
          height: 0.625rem /* 10/16 */;
          border-right: 0.0625rem /* 1/16 */ solid #3ce0e6;
        }

        .line {
          flex: 1;
          display: flex;
          justify-content: space-evenly;
          position: relative;
          bottom: 0.625rem /* 10/16 */;
          height: 0.625rem /* 10/16 */;
          border-right: 0.0625rem /* 1/16 */ solid #3ce0e6;
          .x-line {
            height: 0.375rem /* 6/16 */;
            width: 0.0625rem /* 1/16 */;
            border-right: 0.0625rem /* 1/16 */ solid #3ce0e6;
          }
        }
      }
    }

    .row-task-item-wrap {
      margin-bottom: 0.625rem /* 10/16 */;
      .progressText {
        font-weight: 500;
        text-align: left;
      }

      .progress {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 0.625rem /* 10/16 */;
      }
    }

    .progress-bar {
      flex: 1;
      height: 1.25rem /* 20/16 */;
      box-shadow: 0 0 2px #2e82a0;
      border-radius: 0.25rem /* 4/16 */;
      background: #010b1e;
      position: relative;
    }
    .progress-bar .progress {
      color: #fff;
      height: 100%;
      margin-top: 0.0625rem /* 1/16 */;
      border-radius: 0.25rem /* 4/16 */;
      transition: all 0.3s;
    }
  }
}
</style>
