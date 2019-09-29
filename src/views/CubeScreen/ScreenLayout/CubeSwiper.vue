<template>
  <div class="CubeSwiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide,index) in cubeSwiperList" :key="index">
        <div class="swiper-cube-card" :class="curIndexActive==index?'activeCard' : ''">
          <div class="project-progress">
            <el-progress
              :color="slide.Color"
              :width="80"
              type="circle"
              :percentage="slide.Progress*1"
            />
          </div>
          <div class="project-desc" @click="clickItem(slide,index)">
            <p class="name-pro">{{ slide.Name }}</p>
            <p class="project-text">负责人: {{ slide.Leader }}</p>
            <p class="project-text">完成日期 {{ slide.End }}</p>
          </div>
        </div>
      </swiper-slide>

      <!-- <div class="swiper-pagination" style="display: none;" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'CubeSwiper',
  props: {
    cubeSwiperList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      curIndexActive: 0,
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 10,
        freeMode: true,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-next'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    clickItem(item, index) {
      console.log(index, 'xx')
      if (this.curIndexActive === index) return
      this.curIndexActive = index
      this.$emit('cubeSwiperChange', item, index)
    },
    selectThis(e) {
      console.log(e, 'xxx')
      this.timer = setTimeout(() => {
        this.curIndexActive++
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
.CubeSwiper {
  color: #fff;
  // width: 100%;
  // height: 100%;
  .swiper-cube-card {
    // margin-left: 2.75rem /* 44/16 */;
    cursor: pointer;
    min-height: 7.5rem /* 120/16 */;
    width: 98%;
    height: 100%;
    display: flex;
    border: 1px solid #0b54c4;
    transition: all 0.01s cubic-bezier(0.4, 0, 0.2, 1);

    .project-progress {
      width: 5rem /* 80/16 */;
      margin-left: 2.5rem /* 40/16 */;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .project-desc {
      p {
        padding: 0;
        margin: 0;
      }
      cursor: pointer;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-left: 0.625rem /* 10/16 */;
      .name-pro {
        font-size: 1.25rem /* 20/16 */;
        padding-bottom: 0.5rem /* 8/16 */;
      }
      .project-text {
        font-size: 0.875rem /* 14/16 */;
        padding: 0.125rem /* 2/16 */;
      }
    }

    /deep/.el-progress__text {
      color: #fff;
      font-size: 1rem /* 16/16 */;
      font-weight: 600;
    }
  }

  // 激活
  .activeCard {
    // background: rgba(62, 177, 214, 0.3);
    // background: rgba(44, 38, 80, 0.94);
    background: linear-gradient(
      to left,
      rgba(62, 177, 214, 0.4),
      rgba(44, 38, 80, 0.94)
    );
  }

  .swiper-container {
    .arrow {
      cursor: pointer;
      font-size: 2.5rem /* 40/16 */;
      border: 1px solid #3ebde2;
    }
  }
}
</style>

<style>
 .el-progress__text {
    font-size: 1.125rem /* 18/16 */!important;
  }
</style>
