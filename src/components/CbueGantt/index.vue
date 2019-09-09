<template>
  <div class="CbueGantt">
    <svg id="CbueGantt" />
  </div>
</template>

<script>
import Gantt from 'frappe-gantt'

export default {
  name: 'CbueGantt',
  props: {
    modeView: {
      type: String,
      default: () => 'Month'
    }
  },
  data() {
    return {
      tasksList: [
        {
          id: 'Task 1',
          name: 'Redesign website',
          start: '2016-12-28',
          end: '2019-12-31',
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
        this.gantt = new Gantt('#CbueGantt', this.tasksList, {
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
        console.log(this.gantt)
      })
    },
    changeCbueGanttMode(value) {
      const type = ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'].includes(value) ? value : 'Week'
      // Quarter Day, Half Day, Day, Week, Month
      this.gantt.change_view_mode(type)
    }
  },
  watch: {
    modeView: {
      handler(valuse) {
        this.changeCbueGanttMode(valuse)
      }
    }
  }
}
</script>

<style lang="scss">
.CbueGantt {
  color: #ffff;
  background: #333333;
  .bar-milestone {
    background: #333333;
  }
}
// .gantt .grid-header{
//     fill: #333333;
//     stroke:none;
//     stroke-width: 0;
// }
</style>
