<template>
  <div class="container" ref="CubeRule">
    <div class="ruler_container">
      {{ renderwidth }}
      <div class="tasks-item" v-for="(taskItem,index) in tagsList" :key="index">
        <div
          class="row-task-item-wrap"
          :style="renderTaskStyle(taskItem,k)"
          v-for="(k,i) in taskItem.children"
          :key="i"
        >
          <div class="progress-bar">
            <div class="progress" :style="renderStyle(k)">{{ k.name }}</div>
          </div>
          <div class="progressText" v-if="k.progress">{{ k.progress + '%' }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import dayjs from 'dayjs'
import BigNumber from 'bignumber.js'

export default {
  name: 'CubeRule',
  props: {},
  data() {
    return {
      tagsList: [
        {
          id: 'Task 1',
          name: 'Redesign website',
          start: '2019-07-1',
          end: '2019-09-31',
          progress: 20,
          dependencies: 'Task 2, Task 3',
          custom_class: 'bar-milestone',
          children: [
            {
              id: 'Task 1 - 1',
              name: '子任务1',
              start: '2019-07-1',
              end: '2019-07-30',
              progress: 20,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            },
            {
              id: 'Task 1 - 1',
              name: '子任务1',
              start: '2019-01-4',
              end: '2019-01-4',
              progress: 100,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            },
            {
              id: 'Task 1 - 1',
              name: '子任务1',
              start: '2019-01-1',
              end: '2019-01-4',
              progress: 20,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            },
            {
              id: 'Task 1 - 2',
              name: '子任务2',
              start: '2019-01-4',
              end: '2019-01-7',
              progress: 45,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            }
          ]
        }
      ],
      renderwidth: ''
    }
  },
  computed: {},
  mounted() {
    this.renderDom()
  },
  methods: {
    renderDom() {
      this.renderwidth = this.$refs['CubeRule'].getBoundingClientRect().width
    },
    renderTaskStyle(item, key) {
      const totalStart = dayjs(item.start)
      const totalEnd = dayjs(item.end)
      const tempInterval = Math.abs(totalStart.diff(totalEnd, 'day'))
      console.log(tempInterval, '天')
      console.log(this.renderwidth, '宽度')

      const t = tempInterval / this.renderwidth
      console.log(BigNumber(t).toFixed(2))

      const keyTotalStart = dayjs(key.start)
      const keyTotalEnd = dayjs(key.end)
      const keyTempInterval = Math.abs(keyTotalStart.diff(keyTotalEnd, 'day'))

      const left = Math.abs(totalStart.diff(keyTotalStart, 'day'))

      // const itemLength = Math.abs(dayjs(start).diff(dayjs(end)), 'day')
      // const keyLength = Math.abs(dayjs(key.start).diff(dayjs(key.end)), 'day')
      // const widthProgress = Math.ceil((keyLength / itemLength) * 100)
      // const left = Math.abs(dayjs(start).diff(dayjs(key.start)), 'day')

      return {
        // width: keyTempInterval * t + 'px',
        // marginLeft: left * t + 'px'
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

    .row-task-item-wrap {
      display: flex;
      align-items: center;
      position: relative;

      .progressText {
        padding-left: 0.625rem /* 10/16 */;
        // color: #fff;
        font-weight: 500;
        text-align: left;
        // position: absolute;
        // right: -2.75rem /* 44/16 */;
      }

      .progress {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 0.625rem /* 10/16 */;
      }
    }

    .capsule-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .progress-bar {
      flex: 1;
      height: 1.25rem /* 20/16 */;
      margin: 5px 0px;
      box-shadow: 0 0 2px #2e82a0;
      border-radius: 0.25rem /* 4/16 */;
      background: #010b1e;
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
