<template>
  <div class="container">
    <div class="ruler_container">
      <div class="tasks-item" v-for="(taskItem,index) in tagsList" :key="index">
        <div class="tasks-item-name">
          <h1>TEXT</h1>
          {{ renderwidth }}
        </div>
        <div class="tasks-item-right" ref="CubeRuleBox">
          <div class="row-task-item-wrap" v-for="(k,i) in taskItem.children" :key="i">
            <div class="progress-bar" :style="renderTaskStyle(taskItem,k)">
              <div class="progress" :style="renderStyle(k)">{{ k.name }}</div>
            </div>
            <span class="progressText" v-if="k.progress">{{ k.progress + '%' }}</span>
          </div>

          <div class="rule-k">
            <div class="startTime" v-text="taskItem.start" />
            <div class="endTime" v-text="taskItem.end" />
            <div v-for="(item, index) in tempInterval" :key="index" class="line">
              <!-- {{ index }} -->
              <!-- <div v-for="k in 4" :key="k" class="x-line" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'

export default {
  name: 'CubeRule',
  props: {},
  data() {
    return {
      tagsList: [
        {
          id: 'Task 1',
          name: '大楼布线安装',
          start: '2019-07-1',
          end: '2019-09-30',
          progress: 72,
          dependencies: 'Task 2, Task 3',
          custom_class: 'bar-milestone',
          children: [
            {
              id: 'Task 1 - 1',
              name: '硬件设施购买',
              start: '2019-07-01',
              end: '2019-08-10',
              progress: 100,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            },
            {
              id: 'Task 1 - 1',
              name: '软件开发商招标',
              start: '2019-08-11',
              end: '2019-09-12',
              progress: 80,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            },
            {
              id: 'Task 1 - 1',
              name: '硬件安装',
              start: '2019-07-1',
              end: '2019-09-12',
              progress: 20,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            },
            {
              id: 'Task 1 - 2',
              name: '设备调试',
              start: '2019-09-13',
              end: '2019-09-30',
              progress: 0,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            }
          ]
        }
      ],
      renderwidth: '',
      tempInterval: []
    }
  },
  computed: {},
  mounted() {
    this.renderDom()
  },
  methods: {
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
      return {
        width: item.progress + '%',
        background: item.background ? item.background : '#2F73FB'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  padding: 1.25rem /* 20/16 */;

  .tasks-item {
    position: relative;
    border: 1px solid #2e82a0;
    padding: 1.25rem /* 20/16 */;
    border-radius: 0.625rem /* 10/16 */;
    display: flex;
    align-items: center;

    .tasks-item-name {
      padding: 0.625rem /* 10/16 */;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .tasks-item-right {
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
          left: -4.875rem /* 78/16 */;
          top: -0.875rem /* 14/16 */;
        }
        .endTime {
          position: absolute;
          top: -0.875rem /* 14/16 */;
          right: -4.875rem /* 78/16 */;
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
      flex: 1;
      align-items: center;
      position: relative;

      .progressText {
        padding-left: 0.625rem /* 10/16 */;
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

      .progressText {
        position: absolute;
        left: 0;
        top: 0;
      }
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
