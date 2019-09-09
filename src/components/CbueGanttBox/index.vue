<template>
  <div class="CbueGantt">
    <svg id="CbueGantt" />
  </div>
</template>

<script>
import Gantt from 'frappe-gantt'

export default {
  name: 'CbueGantt',
  data() {
    return {
      tasksList: [
        {
          id: 'Task 1',
          name: 'Redesign website',
          start: '2016-12-28',
          end: '2016-12-31',
          progress: 20,
          dependencies: '',
          custom_class: 'bar-milestone' // optional
        },
        {
          id: 'Task 2',
          name: 'Redesign website',
          start: '2016-12-29',
          end: '2016-12-31',
          progress: 20,
          dependencies: ''
        }
      ]
    }
  },
  mounted() {
    this.initRender()
  },
  methods: {
    initRender() {
      this.$nextTick().then(() => {
        const gantt = new Gantt('#CbueGantt', this.tasksList, {
          header_height: 50,
          column_width: 30,
          step: 24,
          view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
          bar_height: 20,
          bar_corner_radius: 3,
          arrow_curve: 5,
          padding: 18,
          view_mode: 'Day',
          date_format: 'YYYY-MM-DD',
          custom_popup_html: null
        })
        console.log(gantt)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.CbueGantt {
  color: #ffff;
  background: #333333;
  .bar-milestone {
    background: #333333;
  }
}
</style>
