<template>
  <div class="chart">
    <v-chart ref="pie" :options="options" />
  </div>
</template>

<style>
.echarts {
  width: 100%;
  height: 100%;
}
.flex-box {
  display: flex;
  align-items: center;
}
</style>

<script>
import ECharts from 'vue-echarts'
import echarts from 'echarts'
// import 'echarts-liquidfill'
// import 'echarts/lib/chart/pie'
// import 'echarts/lib/component/title'
// import 'echarts/lib/component/legend'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    color: {
      type: Array,
      default: () => [
        ['#f084bc', '#d033f2'], // 一人多机
        ['#5c18da', '#a117fe'], // 机械作业未达标
        ['#f0672a', '#fd0903'], // 跨区域运输
        ['#23f58c', '#23f58c'], // 生态园承载过量
        ['#93ec43', '#ebf42d'], // 暴露垃圾
        ['#fdc92f', '#ef732e'], // 人员作业未达标
        ['#40a5e2', '#40d6b7'] // 非工作时段运输
      ]
    },
    size: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    subtext: {
      type: String,
      default: ''
    }
  },
  components: {
    'v-chart': ECharts
  },
  data() {
    return {
      inputText: '',
      gradientArr: [],
      options: {
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        toolbox: {
          show: false
        },
        series: [
          {
            name: '',
            type: 'pie',
            clockWise: false,
            radius: ['90%', '94%'],
            hoverAnimation: false,
            startAngle: 94,
            minAngle: 10,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            data: [2200, 3000, 2220]
          }
        ]
      }
    }
  },
  mounted() {
    this.$nextTick().then(_ => {
      let dataIndex = -1
      const pie = this.$refs.pie
      const dataLen = pie.options.series[0].data.length

      setInterval(() => {
        // 取消选中
        pie.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex
        })

        dataIndex = (dataIndex + 1) % dataLen

        // 选中
        pie.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex
        })

        // // 显示 tooltip
        pie.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex
        })
      }, 2000)

      this.setColor()
      this.setCircleChart()
    })
  },
  methods: {
    setTitel() {
      const { inputText } = this
      this.options.title.text = inputText
    },
    chartResize() {
      this.$nextTick(() => {
        const pie = this.$refs.pie.refresh()
        console.log(pie)
      })
    },
    setColor() {
      if (this.color.length > 0) {
        this.gradientArr = []
        this.color.map(v => {
          this.gradientArr.push({
            borderWidth: 10,
            // eslint-disable-next-line no-undef
            borderColor: new echarts.graphic.LinearGradient(
              0, 0, 1, 1,
              [{
                offset: 0,
                color: v[0]
              }, {
                offset: 1,
                color: v[1]
              }]
            )
          })
        })
      }
    },
    setCircleChart() {
      const scaleData = JSON.parse(JSON.stringify(this.options.series[0].data))
      // 圆环空格距离
      let space = scaleData.reduce((t, n) => t + n, 0) * 0.03
      space = space.toFixed(2) * 1 // 保留2位小数
      // 渐变色
      const itemStyle = this.gradientArr
      // 空格占位
      const placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      }
      // 填充data数据
      const data = []
      for (let i = 0; i < scaleData.length; i++) {
        data.push({
          name: '',
          value: scaleData[i],
          itemStyle: itemStyle[i]
        }, {
          name: '',
          value: space,
          itemStyle: placeHolderStyle
        })
      }
      // 填充series数据
      this.$nextTick(() => {
        this.options.series[0].data = data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 30%;
  height: 80%;
}

</style>
