<template>
  <div class="CubeSwiper">
    <swiper :options="swiperOption" ref="CubeSwiper">
      <swiper-slide
        v-for="(slide,index) in cubeSwiperList"
        :key="index"
        @click.native="clickItem(slide,index)"
      >
        <div class="swiper-cube-card" :class="curIndexActive==index?'activeCard' : ''">
          <div class="project-progress">
            <el-progress
              :color="slide.Color"
              :width="80"
              type="circle"
              :percentage="slide.Progress*1"
            />
          </div>
          <div class="project-desc">
            <p class="name-pro">{{ slide.Name }}</p>
            <p class="project-text">负责人: {{ slide.Leader }}</p>
            <p class="project-text">完成日期 {{ slide.End }}</p>
          </div>
        </div>
      </swiper-slide>
      <!-- <swiper-slide v-for="(item,index) in 8" :key="index">Slide {{index}}</swiper-slide> -->
      <div class="swiper-pagination" style="display: none;" slot="pagination"></div>
      <div class="swiper-button-prev" style="display: none;" slot="button-prev"></div>
      <div class="swiper-button-next" style="display: none;" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'CubeSwiper',
  props: {
    autoplay: {
      type: Boolean,
      default: () => true
    },
    cubeSwiperList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      timer: null,
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
  mounted() {
    if (this.autoplay) {
      this.playToNextProject()
    }
    this.$nextTick().then(_ => {
      this.swiper = this.$refs['CubeSwiper'].swiper
    })
  },
  methods: {
    playToNextProject() {
      const { cubeSwiperList } = this
      if (cubeSwiperList.length <= 4) return
      // console.log(cubeSwiperList.length, '共')
      if (this.timer) clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.curIndexActive++
        console.log(this.curIndexActive, '第几章')
        if (this.curIndexActive === 4) this.swiper.slideNext()
        if (this.curIndexActive >= cubeSwiperList.length) {
          this.curIndexActive = 0
          this.swiper.slideTo(0)
        }
        this.$emit('cubeSwiperChange', this.curIndexActive)
      }, 5000)
    },
    clickItem(item, index) {
      console.log(index, '点击项目')
      // if (this.curIndexActive === index) return
      this.curIndexActive = index
      this.playToNextProject()
      this.$emit('cubeSwiperChange', this.curIndexActive, item)
      this.$emit('update:autoplay', true)
    }
  },
  watch: {
    cubeSwiperList: {
      handler(list) {
        if (this.autoplay) this.playToNextProject()
      }
    },
    autoplay: {
      handler(value) {
        if (!value) {
          if (this.timer) clearInterval(this.timer)
        } else {
          this.playToNextProject()
        }
      }
    }
  },
  beforeDestroy() {
    console.log('销毁之前')
    clearInterval(this.timer)
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
  font-size: 1.125rem /* 18/16 */ !important;
}
</style>
