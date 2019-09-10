<template>
  <section class="CubeScreen">
    <AppScreenContainer>
      <section class="main-container-layout">
        <AppTools />
        <div class="main-container-layout-header">
          <CubeDataHader />
        </div>
        <el-row :gutter="20">
          <el-col :span="7">
            <div class="CubeDataCard-item">
              <CubeBorderBox4>
                <div class="cube-data-box">
                  <div class="title-data-box">
                    总体进度
                    <CubeDecoration3 />
                  </div>
                  <ve-ring
                    :extend="extend"
                    data-type="percent"
                    :judge-width="true"
                    :data="ringChartData"
                  />
                </div>
              </CubeBorderBox4>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="CubeDataCard-item">
              <CubeBorderBox4>
                <div class="cube-data-box">
                  <div class="title-data-box">
                    工作量统计
                    <CubeDecoration3 />
                  </div>
                  <CubeCapsule :config="CubeCapsuleConfig" />
                </div>
              </CubeBorderBox4>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="CubeDataCard-item">
              <CubeBorderBox4>
                <div class="cube-data-box">
                  <div class="title-data-box">
                    工作评级
                    <CubeDecoration3 />
                  </div>
                  <CbueScrollRank :config="CbueScrollRankConfig" />
                </div>
              </CubeBorderBox4>
            </div>
          </el-col>
        </el-row>

        <div class="main-container-layout-center">
          <dv-border-box-1>
            <div class="title-data-box">任务进度</div>
            <div class="cube-data-box-main">
              <ul class="target-title">
                <li v-for="(item,index) in targetTitleData" :key="index" class="target-title-item">
                  <i class="dotTag" :style="{ background: item.color }" />
                  <span class="text" v-text="item.titleText" />
                </li>
              </ul>

              <div class="target-title-cubegantt">
                <el-carousel :interval="5000" class="side-carousel-box" direction="vertical" :autoplay="false">
                  <el-carousel-item v-for="item in cubeRuleData" :key="item.id">
                    <CubeRule :data="item" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </dv-border-box-1>
        </div>
      </section>
    </AppScreenContainer>
  </section>
</template>

<script>
import AppScreenContainer from '_c/AppScreenContainer'
import AppTools from '_c/AppTools'
import CubeBorderBox4 from '_c/CubeBorderBox4'
import CubeCapsule from '_c/CubeCapsule'
import CbueScrollRank from '_c/CbueScrollRank'
import CubeRule from '_c/CubeRule'
import CubeDecoration3 from '_c/CubeDecoration3'

import CubeDataHader from './ScreenLayout/ScreenLayouHeader'

import VeRing from 'v-charts/lib/ring.common'

export default {
  name: 'CubeScreen',
  components: {
    VeRing,
    AppTools,
    CubeCapsule,
    CubeRule,
    CbueScrollRank,
    CubeDataHader,
    CubeBorderBox4,
    CubeDecoration3,
    AppScreenContainer
  },
  data() {
    return {
      CubeCapsuleConfig: {
        data: [
          {
            name: '背景',
            value: 167
          },
          {
            name: '周口',
            value: 123
          },
          {
            name: '漯河',
            value: 98
          },
          {
            name: '郑州',
            value: 75
          },
          {
            name: '西峡',
            value: 66
          }
        ],
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        unit: ''
      },
      CbueScrollRankConfig: {
        data: [
          {
            name: '北京',
            value: 55
          },
          {
            name: '上海',
            value: 55
          },
          {
            name: '广州',
            value: 55
          },
          {
            name: '深圳',
            value: 88
          },
          {
            name: '珠海',
            value: 120
          },
          {
            name: '南京',
            value: 78
          },
          {
            name: '宁波',
            value: 66
          },
          {
            name: '浙江',
            value: 80
          }
        ],
        waitTime: 4000,
        carousel: 'single',
        unit: '星'
      },
      targetTitleData: [
        { color: '#27EC83', titleText: '按时完成' },
        { color: '#FF2300', titleText: '逾期完成' },
        { color: '#2F73FB', titleText: '进行中' }
      ],
      extend: {
        legend: {
          textStyle: { color: '#fff' }
        },
        grid: {
          textStyle: {
            color: '#fff'
          }
        },
        series: {
          radius: ['30%', '40%'],
          center: ['40%', '30%']
        }
      },
      ringChartData: {
        columns: ['项目', '进度'],
        rows: [
          { 项目: '5G基站推进', 进度: 20 },
          { 项目: '大楼布线', 进度: 50 },
          { 项目: 'UPS组电池更新', 进度: 47 }
        ]
      },
      CbueGanttMode: '',
      cubeRuleData: [
        {
          id: 'shiliangsladske',
          name: '大楼布线安装',
          start: '2019-07-1',
          end: '2019-09-30',
          progress: 72,
          dependencies: 'Task 2, Task 3',
          custom_class: 'bar-milestone',
          children: [
            {
              id: 'Task 1 - 1',
              name: '硬件设施购买',
              start: '2019-07-01',
              end: '2019-08-10',
              progress: 100,
              progressColor: '#27EC83',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            },
            {
              id: 'Task 1 - 1',
              name: '软件开发商招标',
              start: '2019-08-11',
              end: '2019-09-12',
              progress: 80,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            },
            {
              id: 'Task 1 - 1',
              name: '硬件安装',
              start: '2019-07-1',
              end: '2019-09-12',
              progress: 20,
              progressColor: '#FF2300',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            },
            {
              id: 'Task 1 - 2',
              name: '设备调试',
              start: '2019-09-13',
              end: '2019-09-30',
              progress: 0,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            }
          ]
        },
        {
          id: 'shiliangslad',
          name: '5G基站推进',
          start: '2019-07-1',
          end: '2019-09-30',
          progress: 72,
          dependencies: 'Task 2, Task 3',
          custom_class: 'bar-milestone',
          children: [
            {
              id: 'Task 1 - 1',
              name: '硬件设施购买',
              start: '2019-07-01',
              end: '2019-08-10',
              progress: 100,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            },
            {
              id: 'Task 1 - 1',
              name: '软件开发商招标',
              start: '2019-08-11',
              end: '2019-09-12',
              progress: 80,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            },
            {
              id: 'Task 1 - 1',
              name: '硬件安装',
              start: '2019-07-1',
              end: '2019-09-12',
              progress: 20,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            },
            {
              id: 'Task 1 - 2',
              name: '设备调试',
              start: '2019-09-13',
              end: '2019-09-30',
              progress: 0,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            }
          ]
        },
        {
          id: 'shiliangsl',
          name: 'USP电池组更新',
          start: '2019-07-1',
          end: '2019-09-30',
          progress: 72,
          dependencies: 'Task 2, Task 3',
          custom_class: 'bar-milestone',
          children: [
            {
              id: 'Task 1 - 1',
              name: '硬件设施购买',
              start: '2019-07-01',
              end: '2019-08-10',
              progress: 100,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            },
            {
              id: 'Task 1 - 1',
              name: '软件开发商招标',
              start: '2019-08-11',
              end: '2019-09-12',
              progress: 80,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            },
            {
              id: 'Task 1 - 1',
              name: '硬件安装',
              start: '2019-07-1',
              end: '2019-09-12',
              progress: 20,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            },
            {
              id: 'Task 1 - 2',
              name: '设备调试',
              start: '2019-09-13',
              end: '2019-09-30',
              progress: 0,
              progressColor: 'blue',
              dependencies: 'Task 2, Task 3',
              custom_class: 'bar-milestone' // optional
            }
          ]
        }
      ]
    }
  },
  methods: {
    changeViewModel(item) {
      this.CbueGanttMode = item.model
    }
  }
}
</script>

<style lang="less" scoped>
.CubeScreen {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;
  ul,
  li {
    list-style: none;
  }

  #AppScreenContainer {
    background-size: cover;
    background-position: center;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    background-repeat: no-repeat;
    background-image: url("../../assets/bg_img/bg_04.png");
    box-shadow: 0 0 3px #100925;
    display: flex;
    flex-direction: column;
  }
  .main-container-layout {
    height: ~"calc(100vh - 500px)";

    padding: 1.25rem /* 20/16 */ 2.5rem /* 40/16 */;
    padding-top: 0;

    .CubeDataCard-item {
      .cube-data-box {
        padding: 0.625rem /* 10/16 */ 1.25rem /* 20/16 */;
        height: 15.625rem /* 250/16 */;

        .title-data-box {
          font-size: 1.25rem /* 20/16 */;
          font-weight: 400;
          margin-left: -1.25rem /* 20/16 */;
          margin-top: -0.625rem /* 10/16 */;
          .CubeDecoration3 {
            height: 1.25rem /* 20/16 */;
            width: 7.5rem /* 120/16 */;
          }
        }
      }
    }

    .main-container-layout-center {
      margin-top: 1.375rem /* 22/16 */;
      width: 100%;
      height: 100%;

      .target-title-cubegantt {
        width: 100%;
        height: 100%;
        .side-carousel-box {
          width: 100%;
          height: 100%;
        }
      }

      .title-data-box {
        font-size: 1.25rem /* 20/16 */;
        font-weight: 400;
        margin-left: 1.25rem /* 20/16 */;
        margin-top: -0.625rem /* 10/16 */;
      }
      .target-title {
        margin-top: -2rem /* 32/16 */;
        display: flex;
        justify-content: center;
      }
      .target-title-item {
        display: flex;
        align-items: center;

        .dotTag {
          display: inline-block;
          width: 1.5rem /* 24/16 */;
          height: 1.5rem /* 24/16 */;
          background: #fff;
          border-radius: 50%;
        }
        .text {
          font-weight: 600;
          padding: 0.625rem /* 10/16 */;
        }
      }
    }
  }
}
</style>
