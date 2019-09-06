<template>
  <div class="at-eg">
    <div class="at-eg-hd">
      <!-- <table cellpadding="0" cellspacing="0" border="0" class="at-eg-tb">
        <thead>
          <tr>
            <th class="at-eg-cell-first">
              <div v-show="isLoading" class="at-eg-spinner">
                <slot name="spinner">
                  <i :class="'at-eg-spinner-' + spinner"></i>
                </slot>
              </div>
              <div v-show="!isLoading" class="at-eg-cell-first-inner">名称/日期</div>
            </th>
            <th v-for="(date,index) in dates" :key="index">{{ date }}</th>
          </tr>
        </thead>
      </table>-->

      <table cellpadding="0" cellspacing="0" border="0" class="at-eg-tb">
        <thead>
          <tr>
            <th class="at-eg-cell-first">
              <div class="at-eg-cell-first-inner">名称/日期</div>
            </th>
            <th v-for="(date,index) in calibration" :key="index">{{ date }}</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="at-eg-bd">
      <table class="at-eg-tb at-eg-tasks">
        <tbody>
          <div v-for="(obj, idx) in egtasks" :key="idx">
            <user-tasks
              :user="obj.user"
              :tasks="obj.tasks"
              :dates="dates"
              :cls="idx % 2 === 0 ? 'at-eg-odd' : ''"
            ></user-tasks>
          </div>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="stylus" src="./style.styl"></style>

<script>
import UserTasks from './UserTasks.vue'
import UserTaskParser from './UserTaskParser'
import dayjs from 'dayjs'

export default {
  data() {
    return {
      dates: [],
      isLoading: false
    }
  },
  props: {
    startTime: {
      type: String,
      default: () => ''
    },
    endTime: {
      type: String,
      default: () => ''
    },
    utasks: {
      type: Array,
      default: () => []
    },
    sdate: String,
    spinner: {
      type: String,
      default: () => 'default'
    }
  },
  computed: {
    egtasks() {
      const items = []
      this.utasks.forEach((obj, idx) => {
        const utp = new UserTaskParser(obj.tasks, this.sdate)
        const data = {}
        data.user = obj
        data.tasks = utp.items
        data.total = utp.total
        this.dates = utp.dates
        items.push(data)
      })
      return items
    },
    calibration() {
      const { startTime, endTime } = this
      const date1 = dayjs(startTime)
      const date2 = dayjs(endTime)
      const stemp = date2.diff(date1, 'day') || []
      console.log(date1.diff(stemp, 'day'))
      return stemp
    }
  },
  components: {
    UserTasks
  },
  created() {
    this.isLoading = true
  },
  updated() {
    this.isLoading = false
  }
}
</script>
