<template>
  <div class="chart">
    <v-chart ref="pie" v-if="false" :options="options" />
    <AppInfiniteList />
    <div class="flex-box">
      <el-input v-model="inputText" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="chartResize">刷新</el-button>
    </div>
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

import AppInfiniteList from '_c/AppInfiniteList'

export default {
  components: {
    'v-chart': ECharts,
    AppInfiniteList
  },
  data() {
    return {
      inputText: '',
      options: {
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
