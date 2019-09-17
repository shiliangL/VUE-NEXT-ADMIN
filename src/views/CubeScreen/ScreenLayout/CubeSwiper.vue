<template>
  <div class="CubeSwiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides" :key="slide">
        <div class="swiper-cube-card">
          <div class="project-progress">
            <el-progress type="circle" :percentage="32" />
          </div>
          <div class="project-desc">
            中山公园建设项目
            负责人
            完成日期 2019年09月12日
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" style="display: none;" slot="pagination"></div>
      <div class="arrow el-icon-arrow-left" slot="button-prev" />
      <div class="arrow el-icon-arrow-right" slot="button-next" />
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
      swiperSlides: [1, 2, 3, 4, 5],
      swiperOption: {
        // effect: 'coverflow',
        // grabCursor: true,
        // centeredSlides: true,
        // slidesPerView: 'auto',
        // coverflowEffect: {
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true
        // },
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 40,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.el-icon-arrow-right',
          prevEl: '.el-icon-arrow-left'
        }
      }
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
  width: 100%;
  height: 100%;
  .swiper-cube-card {
    min-height: 7.5rem /* 120/16 */;
    padding: 0.625rem /* 10/16 */;
    width: 100%;
    height: 100%;
    border: 1px solid #3ebde2;
    display: flex;
    /deep/.el-progress__text {
      color: #fff;
      font-size: 1rem /* 16/16 */;
      font-weight: 600;
    }
  }
  .swiper-container{
    .arrow{
      cursor: pointer;
      font-size: 2.5rem /* 40/16 */;
      // z-index: 200;
      // left: 0;
      // position: absolute;
      // height: 100%;
      border: 1px solid #3ebde2;
    }
  }
  // .swiper-inner {
  //   width: 100%;
  //   height: 400px;
  //   padding-top: 50px;
  //   padding-bottom: 50px;
  // }
  // .swiper-slide {
  //   background-position: center;
  //   background-size: cover;
  //   width: 26.25rem /* 420/16 */;
  //   min-height: 7.5rem /* 120/16 */;
  // }
}
</style>
