<template>
  <div class="CubeSwiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides" :key="slide">
        <div class="swiper-cube-card">
          <div class="project-progress">
            <el-progress :color="colors" :width="80" type="circle" :percentage="32" />
          </div>
          <div class="project-desc">
            <p class="name-pro">中山公园建设项目</p>
            <p class="project-text">负责人:李达康</p>
            <p class="project-text">完成日期 2019年09月12日</p>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-pagination" style="display: none;" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'CubeSwiper',
  data() {
    return {
      swiperSlides: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
      },
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 }
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
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
    min-height: 7.5rem /* 120/16 */;
    width: 98%;
    height: 100%;
    display: flex;
    border: 1px solid #0b54c4;

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
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-left: .625rem /* 10/16 */;
      .name-pro {
        font-size: 1.25rem /* 20/16 */;
        padding-bottom: .5rem /* 8/16 */;
      }
      .project-text {
        font-size: 0.875rem /* 14/16 */;
        padding: .125rem /* 2/16 */;
      }
    }

    /deep/.el-progress__text {
      color: #fff;
      font-size: 1rem /* 16/16 */;
      font-weight: 600;
    }
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
