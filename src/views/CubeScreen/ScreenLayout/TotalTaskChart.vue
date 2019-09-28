<template>
  <div class="chart">
    <v-chart ref="pie" :options="options" />
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
    titleText: {
      type: String,
      default: () => '72%'
    },
    legendData: {
      type: Array,
      default: () => []
    },
    color: {
      type: Array,
      default: () => []
    }
  },
  components: {
    'v-chart': ECharts
  },
  data() {
    return {
      options: {
        title: {
          top: '43%',
          left: 'center',
          text: '72%',
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
            color: '#fff'
            // fontSize: 14
          },
          data: [
            '硬件设施购买',
            '软件开发商招标',
            '硬件安装',
            '设备调试'
          ]
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
                  fontSize: 12
                }
              }
            }
          },
          {
            type: 'pie',
            radius: ['42%', '50%'],
            color: [
              '#c487ee',
              '#deb140',
              '#49dff0',
              '#034079',
              '#6f81da',
              '#00ffb4'
            ],
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
            data: [
              {
                value: 0.2,
                name: '硬件设施购买'
              },
              {
                value: 0.3,
                name: '软件开发商招标'
              },
              {
                value: 0.4,
                name: '硬件安装'
              },
              {
                value: 0.3,
                name: '设备调试'
              }
            ]
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
    })
  },
  methods: {
    chartInitSetting() {
      // this.options
      const { color } = this
      if (color.length) {
        this.options.series[1].color = color
      }
    },
    chartResize() {
      this.$nextTick(() => {
        const pie = this.$refs.pie.refresh()
        console.log(pie)
      })
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
