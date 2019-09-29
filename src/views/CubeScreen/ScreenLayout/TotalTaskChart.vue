<template>
  <div class="chart">
    <v-chart ref="chartData" :options="options" />
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts-liquidfill'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

export default {
  name: 'TotalTaskChart',
  props: {
    /**
     * chartData:{
     *  data:[{ color: '#3577E5', value: 1, name: '标题' } ],
     *  TotalProgress Number
     * }
     */
    chartData: {
      type: Object,
      required: true,
      default: () => {
        return {
          data: [],
          TotalProgress: 0
        }
      }
    }
  },
  components: {
    'v-chart': ECharts
  },
  data() {
    return {
      colorList: [],
      options: {
        title: {
          top: '43%',
          left: 'center',
          text: 0,
          textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 32
          },
          subtext: '总进度',
          subtextStyle: {
            color: '#fff',
            fontWeight: 400,
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          top: '30%',
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          data: []
        },
        series: [
          {
            type: 'liquidFill',
            backgroundStyle: {
              borderColor: 'transparent',
              color: 'transparent'
            },
            outline: {
              show: false
            },
            data: [
              {
                value: 0.6,
                itemStyle: {
                  normal: {
                    color: '#4AA8FF',
                    opacity: 0.6
                  }
                }
              }
            ],
            center: ['50%', '50%'],
            label: {
              normal: {
                formatter: '',
                textStyle: {
                  fontSize: 14
                }
              }
            }
          },
          {
            type: 'pie',
            radius: ['60%', '74%'],
            color: [],
            // hoverAnimation: false, // //设置饼图默认的展开样式
            label: {
              show: false,
              normal: {
                formatter: '{b}\n{d}%',
                show: false,
                position: ''
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                borderWidth: 0,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: []
          }
        ],
        animationDuration: 2000
      }
    }
  },
  mounted() {
    this.$nextTick().then(_ => {
      this.chartInitSetting()
      let dataIndex = -1
      const pie = this.$refs.chartData
      const dataLen = pie.options.series[0].data.length

      pie.showLoading({
        text: '',
        color: '#116FFB',
        textColor: 'rgba(255, 255, 255, 0.5)',
        maskColor: '#003',
        zlevel: 0
      })

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
    })
  },
  computed: {
    colorListX() {
      const list = this.chartData.data.map(item => item.color) || []
      console.log(list, '图表颜色')
      return list
    }
  },
  methods: {
    chartInitSetting() {
      // this.options
      // console.log(this.TotalProgress)
      // const { color } = this
      // if (color.length) {
      //   this.options.series[1].color = color
      // }
    },
    chartResize() {
      console.log('刷新')
      this.$nextTick(() => {
        if (this.$refs.chartData) this.$refs.chartData.refresh()
      })
    }
  },
  watch: {
    chartData: {
      handler(value) {
        if (!value) return
        const colorList = value.data.map(item => item.color) || []
        const dataName = value.data.map(item => item.name) || []
        this.options.title.text = value.TotalProgress + '%'
        this.options.legend.data = dataName
        this.options.series[1].color = colorList
        this.options.series[1].data = value.data
        // 水位置
        this.options.series[0].data[0].value = value.TotalProgress ? value.TotalProgress / 100 : 0
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
.chart {
  width: 100%;
  height: 100%;
  .flex-box {
    display: flex;
    align-items: center;
  }
  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
