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
import 'echarts-liquidfill'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    color: {
      type: Array,
      default: () => []
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
      optionsX: {
        title: {
          top: '45%',
          left: 'center',
          text: '中国',
          textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 20
          },
          subtext: '(占所有数据的的' + 92 + '%)',
          subtextStyle: {
            color: '#333',
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
          data: [
            '装配完成率',
            '班检完成率',
            '初检完成率',
            '复检完成率',
            '出厂检完成率'
          ]
        },
        series: [
          {
            type: 'liquidFill',
            itemStyle: {
              normal: {
                opacity: 0.4,
                shadowBlur: 0,
                shadowColor: 'blue'
              }
            },
            name: '今日完成进度',
            data: [
              {
                value: 0.6,
                itemStyle: {
                  normal: {
                    color: '#53d5ff',
                    opacity: 0.6
                  }
                }
              }
            ],
            background: '#fff',
            color: ['#53d5ff'],
            center: ['50%', '50%'],
            label: {
              normal: {
                formatter: '',
                textStyle: {
                  fontSize: 12
                }
              }
            },
            outline: {
              itemStyle: {
                borderColor: '#86c5ff',
                borderWidth: 0
              },
              borderDistance: 0
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
              normal: {
                borderWidth: 2,
                borderColor: '#fff'
              },
              emphasis: {
                borderWidth: 0,
                shadowBlur: 2,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: [
              {
                value: 0.2,
                name: '装配完成率'
              },
              {
                value: 0.3,
                name: '班检完成率'
              },
              {
                value: 0.4,
                name: '初检完成率'
              },
              {
                value: 0.3,
                name: '复检完成率'
              },
              {
                value: 0.1,
                name: '出厂检完成率'
              }
            ]
          }
        ],
        animationDuration: 2000
      },
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
      const scaleData = this.data
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
      const seriesObj = [
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
          data: data
        }
      ]
      const option = {
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        toolbox: {
          show: false
        },
        series: seriesObj
      }
      this.$nextTick(() => {
        this.chart.resize()
        this.chart.hideLoading()
        this.chart.setOption(option, true)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 30%;
  height: 80%;
  background: #113549;
}

</style>
