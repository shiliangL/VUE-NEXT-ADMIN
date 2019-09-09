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
                <div class="cube-data-box">总体进度</div>
              </CubeBorderBox4>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="CubeDataCard-item">
              <CubeBorderBox4>
                <div class="cube-data-box">
                  工作量统计
                  <CubeCapsule :config="CubeCapsuleConfig" />
                </div>
              </CubeBorderBox4>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="CubeDataCard-item">
              <CubeBorderBox4>
                <div class="cube-data-box">
                  工作评级
                  <CbueScrollRank :config="CbueScrollRankConfig" />
                </div>
              </CubeBorderBox4>
            </div>
          </el-col>
        </el-row>

        <div class="main-container-layout-center">
          <dv-border-box-1>
            <div class="cube-data-box">
              <ul class="target-title">
                <li v-for="(item,index) in targetTitleData" :key="index" class="target-title-item">
                  <i class="dotTag" :style="{ background: item.color }" />
                  <span class="text" v-text="item.titleText" />
                </li>
              </ul>
              <div class="target-title-cbuegantt">
                <CbueGantt v-if="false" :modeView="CbueGanttMode" />
                <CubeRule />
                <button
                  v-for="(item,index) in handlerType"
                  @click="changeViewModel(item)"
                  :key="index"
                >{{item.text}}</button>
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
import CbueGantt from '_c/CbueGantt'
import CubeRule from '_c/CubeRule'
import CubeDataHader from './ScreenLayout/ScreenLayouHeader'

export default {
  name: 'CubeScreen',
  components: {
    AppTools,
    CubeCapsule,
    CbueGantt,
    CubeRule,
    CbueScrollRank,
    CubeDataHader,
    CubeBorderBox4,
    AppScreenContainer
  },
  data() {
    return {
      CubeCapsuleConfig: {
        data: [
          {
            name: '南阳',
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
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
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
      handlerType: [
        {
          text: '季度',
          model: 'Quarter Day'
        },
        {
          text: '半天',
          model: 'Half Day'
        },
        {
          text: '天',
          model: 'Day'
        },
        {
          text: '星期',
          model: 'Week'
        },
        {
          text: '月份',
          model: 'Month'
        }
      ],
      CbueGanttMode: ''
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

  button {
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    padding: 0.5em 1em;
    outline: none;
    border: none;
    background-color: hsl(236, 32%, 26%);
  }

  button::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fc2f70;
    transform-origin: center right;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }

  button:hover {
    cursor: pointer;
  }

  button:hover::before {
    transform-origin: center left;
    transform: scaleX(1);
  }

  #AppScreenContainer {
    background-size: cover;
    background-position: center;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    background-repeat: no-repeat;
    background-image: url("../../assets/bg_img/bg_02.jpg");
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
        // min-height: 13.75rem /* 220/16 */;
        height: 11.25rem /* 180/16 */;
      }
    }

    .main-container-layout-center {
      margin-top: 1.375rem /* 22/16 */;

      width: 100%;
      height: 100%;

      .target-title {
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
