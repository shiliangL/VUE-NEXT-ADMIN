<template>
  <section class="CubeScreen">
    <AppScreenContainer>
      <CubeDataBgm v-if="true" />
      <section class="main-container-layout">
        <CubeProgressbar reverse linestroke="#0E5FDD" class="CubeProgressbar" />
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
                  <TotalTaskChart
                    ref="TotalTaskChart"
                    :chartData="chartDataToal"
                    :TotalProgress="circleData.TotalProgress"
                    :color="colorList"
                    style="margin-top: -20px;margin-left: -20px;"
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
                  <CubeCapsule style="height: 90%;" :config="CubeCapsuleConfig" />
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
                  <CbueScrollRank
                    style="height: 90%;margin-left: 10px;"
                    :config="CbueScrollRankConfig"
                  />
                </div>
              </CubeBorderBox4>
            </div>
          </el-col>
        </el-row>

        <div class="main-container-layout-swiper">
          <CubeSwiper :cubeSwiperList="circleData.ProjectList" @cubeSwiperChange="cubeSwiperChange" />
        </div>

        <div class="main-container-layout-center">
          <CubeBorderBox1>
            <div class="cube-data-box-main">
              <div class="title-data-box-header">
                <div class="title-data-box">
                  项目任务进度
                  <!-- <span class="tagTips"> - {{ autoplay? '自动轮播' : '轮播暂停' }}</span> -->
                </div>
                <ul class="target-title">
                  <li
                    v-for="(item,index) in targetTitleData"
                    :key="index"
                    class="target-title-item"
                  >
                    <i class="dotTag" :style="{ background: item.color }" />
                    <span class="text" v-text="item.titleText" />
                  </li>
                </ul>
              </div>

              <div class="target-title-cubegantt">
                <el-carousel
                  :interval="5000"
                  indicator-position="none"
                  class="side-carousel-box"
                  direction="vertical"
                  :autoplay="autoplay"
                >
                  <el-carousel-item
                    v-for="item in 1"
                    :key="item.id"
                    @click.native="clickSetAutoPlay"
                  >
                    <CubeRule :dataList="cubeRuleDataList"  />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </CubeBorderBox1>
        </div>
      </section>
    </AppScreenContainer>
  </section>
</template>

<script>
import AppScreenContainer from '_c/AppScreenContainer'
import AppTools from '_c/AppTools'
import CubeDataBgm from '_c/CubeDataBgm'
import CubeBorderBox4 from '_c/CubeBorderBox4'
import CubeCapsule from '_c/CubeCapsule'
import CbueScrollRank from '_c/CbueScrollRank'
import CubeRule from '_c/CubeRule'
import CubeDecoration3 from '_c/CubeDecoration3'
import CubeProgressbar from '_c/CubeProgressbar'
import CubeBorderBox1 from '_c/CubeBorderBox1'

import CubeDataHader from './ScreenLayout/ScreenLayouHeader'
import TotalTaskChart from './ScreenLayout/TotalTaskChart'
import CubeSwiper from './ScreenLayout/CubeSwiper'
import { getUserList, getCircleData } from '@/api'
import dayjs from 'dayjs'

export default {
  name: 'CubeScreen',
  components: {
    AppTools,
    CubeCapsule,
    CubeRule,
    CbueScrollRank,
    CubeDataHader,
    TotalTaskChart,
    CubeBorderBox4,
    CubeDecoration3,
    CubeProgressbar,
    CubeBorderBox1,
    AppScreenContainer,
    CubeDataBgm,
    CubeSwiper
  },
  data() {
    return {
      currentIndex: 0,
      autoplay: true,
      colorList: ['#357DE5', '#E86FC9', '#F7096F', '#34E076', '#FAB52F'],
      CubeCapsuleConfig: {
        data: [
          // { name: '肖主任', value: 5, start: 5, img: '' },
          { name: '陈德良', value: 6, start: 6, img: 'userImage/陈德良.png' },
          { name: '陈传清', value: 6, start: 6, img: 'userImage/陈传清.png' },
          { name: '黄铱平', value: 6, start: 6, img: 'userImage/黄铱平.png' },
          { name: '王恩平', value: 5, start: 5, img: 'userImage/王恩平.png' },
          { name: '张远辉', value: 3, start: 3, img: 'userImage/张远辉.png' }
        ],
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        unit: ''
      },
      CbueScrollRankConfig: {
        data: [
          {
            name: '陈德良',
            value: 5,
            start: 5,
            img: 'http://ftjf.szhcqh.cn/userImage/陈德良.png'
          },
          {
            name: '陈传清',
            value: 5,
            start: 5,
            img: 'http://ftjf.szhcqh.cn/userImage/陈传清.png'
          },
          {
            name: '黄铱平',
            value: 5,
            start: 5,
            img: 'http://ftjf.szhcqh.cn/userImage/黄铱平.png'
          },
          {
            name: '王恩平',
            value: 5,
            start: 5,
            img: 'http://ftjf.szhcqh.cn/userImage/王恩平.png'
          },
          {
            name: '张远辉',
            value: 5,
            start: 5,
            img: 'http://ftjf.szhcqh.cn/userImage/张远辉.png'
          }
        ],
        waitTime: 4000,
        carousel: 'single',
        unit: ''
      },
      targetTitleData: [
        { color: '#50C5C5', titleText: '提前完成' },
        { color: '#27EC83', titleText: '按时完成' },
        { color: '#FF2300', titleText: '逾期完成' },
        { color: '#2F73FB', titleText: '进行中' }
      ],
      chartDataToal: {
        data: [],
        TotalProgress: 0
      },
      circleData: {
        TotalProgress: 0,
        ProjectList: []
      }
    }
  },
  mounted() {
    // console.log(dayjs('2019-08-26T00:00:00').format('YY-MM-DD'))

    this.fetchDataList()
    this.fetchUserList()
  },
  computed: {
    cubeRuleDataList() {
      return this.circleData.ProjectList[this.currentIndex]
    }
  },
  methods: {
    fetchDataList() {
      getCircleData().then(res => {
        if (res.status === 200) {
          const result = res.data
          result.TotalProgress = (result.TotalProgress * 1).toFixed(2) || 0
          const chartDataToal = []
          for (const item of result.ProjectList) {
            chartDataToal.push({
              color: item.Color || '#3577E5',
              value: (item.Progress * 1).toFixed(0) || 0,
              name: item.Name
            })
            item.Progress = (item.Progress * 1).toFixed(0) || '0%'
            item.Start = dayjs(item.Start).format('YYYY-MM-DD')
            item.End = dayjs(item.End).format('YYYY-MM-DD')
            for (const k of item.List) {
              k.Start = dayjs(k.Start).format('YYYY-MM-DD')
              k.End = dayjs(k.End).format('YYYY-MM-DD')
            }
          }

          this.chartDataToal.data = chartDataToal
          this.chartDataToal.TotalProgress = result.TotalProgress

          this.circleData = result
          this.$refs['TotalTaskChart'].chartResize()
          console.log(this.circleData, '处理任务数据')
        }
      })
    },
    fetchUserList() {
      getUserList().then(res => {
        if (res.status === 200) {
          const result = res.data || []
          this.CbueScrollRankConfig.data = result.map(item => {
            return {
              name: item.UserName,
              value: item.StartCount,
              start: item.StartCount,
              img: `http://ftjf.szhcqh.cn/${item.ImagePath}`
            }
          })
        }
      })
    },
    changeViewModel(item) {
      this.CbueGanttMode = item.model
    },
    clickSetAutoPlay() {
      const { autoplay } = this
      this.autoplay = !autoplay
      console.log('xx')
    },
    cubeSwiperChange(item, index) {
      this.currentIndex = index
    }
  },
  watch: {
    autoplay: {
      handler(value) {
        if (!value) {
          // 如果是暂停则 2分钟后自动轮播
          setTimeout(() => {
            this.autoplay = true
          }, 120000)
        }
      }
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
    background-image: url("../../assets/bg_img/bg_06.png");
    box-shadow: 0 0 3px #100925;
    display: flex;
    flex-direction: column;
  }
  .main-container-layout {
    // height: ~"calc(100vh - 300px)";
    position: relative;
    z-index: 20;
    padding: 1.25rem /* 20/16 */ 2.5rem /* 40/16 */;
    padding-top: 0;
    .CubeProgressbar {
      height: 0.25rem /* 4/16 */;
    }
    .main-container-layout-header {
      padding: 0.25rem /* 4/16 */ 0;
      margin-bottom: 1.125rem /* 18/16 */;
    }

    .main-container-layout-swiper {
      margin: 1.25rem /* 20/16 */ 1.25rem /* 20/16 */;
    }

    .CubeDataCard-item {
      .cube-data-box {
        padding: 0.625rem /* 10/16 */ 1.25rem /* 20/16 */;
        height: 15.625rem /* 250/16 */;
        overflow: hidden;

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

    .tagTips {
      font-size: 1rem /* 16/16 */;
    }
    .main-container-layout-center {
      margin-top: 1.375rem /* 22/16 */;
      width: 100%;
      height: 100%;

      .title-data-box-header {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem /* 16/16 */;
        align-items: center;
      }

      .target-title-cubegantt {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        margin-top: -1.75rem;
        .side-carousel-box {
          width: 100%;
          height: 100%;
        }
      }

      .title-data-box {
        font-size: 1.25rem /* 20/16 */;
        font-weight: 400;
        margin-left: 1.25rem /* 20/16 */;
      }

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

<style>
.el-carousel__container {
  height: 37.5rem /* 600/16 */ !important;
}
</style>
