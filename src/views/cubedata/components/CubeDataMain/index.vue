<template>
  <div class="task-main-box">
    <DataBoxCard title="任务进度">

      <div class="total-task">

        <div class="total-task-item" v-for="k in 3" :key="k">
          <div class="task-item-left">
            <div class="project-name">5G基站推进</div>
            <div class="project-progress">72%</div>
            <div class="project-complete">计划完成: 2019年12月05日22</div>
          </div>
          <div class="task-item-main-box">
            <div class="task-list-project">硬件设施购买</div>
            <div class="task-list-project">软件开发商招标</div>
            <div class="task-list-project">硬件安装</div>
            <div class="task-list-project">设备调试</div>
          </div>
        </div>
      </div>
    </DataBoxCard>
  </div>
</template>

<script>
import DataBoxCard from '_c/DataBoxCard'
import data from './data.json'

export default {
  components: {
    DataBoxCard
  },
  data() {
    return {
      sdate: data.sdate,
      utasks: data.items || []
    }
  }
}
</script>

<style lang="scss" scoped>
.task-main-box {
  border-radius: 3px;
  box-shadow: 2px 6px 17px rgba(0, 0, 0, 0.39);
  .total-task {
    padding: 1.25rem /* 20/16 */;
  }
  .total-task-item {
    border: 1px solid #3eb1d6;
    box-shadow: 0 0 4px #3caacd;
    display: flex;
    justify-items: center;
    margin-bottom: 1.25rem /* 20/16 */;

    .task-item-left {
      color: #fff;
      padding: 2.5rem /* 40/16 */;
      .project-name {
        font-size: 1.875rem /* 30/16 */;
      }
      .project-progress {
        font-size: 1.75rem /* 28/16 */;
      }
      .project-complete {
        font-size: 1.125rem /* 18/16 */;
      }
    }
    .task-item-main-box {
    }
  }
}
</style>
