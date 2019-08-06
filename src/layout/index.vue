<template>
  <div class="layout">
    <cube-scroll
      ref="scroll"
      :options="options"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp"
      v-if="$route.name === 'home'"
    >
      <cube-slide ref="slide" :data="siderBanners" @change="changePage">
        <cube-slide-item
          v-for="(item, index) in siderBanners"
          :key="index"
          @click.native="clickHandler(item, index)"
        >
          <a :href="item.url">
            <img :src="item.image" />
          </a>
        </cube-slide-item>
      </cube-slide>

      <!-- <h3>标题</h3> -->
      <AppGrid square clickable :border="false">
        <AppGridItem
          v-for="(item,index) in navigation.item01"
          :key="index"
          :icon="item.icon"
          :text="item.text"
          :to="item.to"
        >
          <div class="icon-item">
            <div>
              <svg-icon class="img-svg" :icon-class="item.icon" />
            </div>
            <span v-text="item.text" />
          </div>
        </AppGridItem>
      </AppGrid>

      <!-- <h3>标题</h3> -->
      <AppGrid square clickable :border="false">
        <AppGridItem
          v-for="(item,index) in navigation.item02"
          :key="index"
          :icon="item.icon"
          :text="item.text"
          :to="item.to"
        >
          <div class="icon-item">
            <div>
              <svg-icon class="img-svg" :icon-class="item.icon" />
            </div>
            <span v-text="item.text" />
          </div>
        </AppGridItem>
      </AppGrid>
    </cube-scroll>

    <transition name="page-move">
      <router-view class="router-view" />
    </transition>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant'
import { fetchTodayList } from '@/api/app'
import { mutations } from '@/vuex/homeStore'

export default {
  name: 'Layout',
  components: {
    AppGrid: Grid,
    AppGridItem: GridItem
  },
  data () {
    return {
      options: {
        pullDownRefresh: {
          threshold: 60,
          stop: 40,
          txt: '更新成功'
        }
      },
      siderBanners: [
        {
          url: 'http://www.didichuxing.com/',
          image:
            'https://tp-qneimg.smzdm.com/201908/06/5d48dda1464f63031.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image:
            'https://tp-qneimg.smzdm.com/201908/05/5d47d9a241e742559.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image:
            'https://tp-qneimg.smzdm.com/201908/05/5d47da831c4f33064.png'
        }
      ]
    }
  },
  created () {
    this.navigation = {
      item01: [
        { icon: 'js', text: '极客', to: '/javaScript' },
        { icon: 'view', text: '小视频', to: '/smallVideo' },
        { icon: 'tuijian', text: '瞎推荐', to: '/recommend' },
        { icon: 'fuli', text: '福利', to: '/theGirls' }
      ],
      item02: [
        { icon: 'p1', text: '计划', to: '/today' },
        { icon: 'p2', text: '排行', to: '/today' },
        { icon: 'p4', text: '交通', to: '/today' },
        { icon: 'p5', text: '体重', to: '/today' },
        { icon: 'p6', text: '周报', to: '/today' },
        { icon: 'p7', text: '风险', to: '/today' },
        { icon: 'p8', text: '运动', to: '/today' },
        { icon: 'p9', text: '硬件', to: '/today' },
        { icon: 'p10', text: '会员', to: '/today' },
        { icon: 'Medal', text: '媒体', to: '/today' }
      ],
      item03: [
        { icon: 'cubeic-good', text: '今日', to: '/today' },
        { icon: 'cubeic-game', text: '前端', to: '/frontEnd' },
        { icon: 'cubeic-game', text: 'IOS', to: '/today' },
        { icon: 'cubeic-game', text: '福利', to: '/today' }
      ]
    }
  },
  mounted () {
    this.fetchTodayList()
  },
  methods: {
    clickHandler () {
      console.log('点击了')
    },
    changePage (e) {
      console.log(e)
    },
    async fetchTodayList () {
      try {
        const { category, results, error } = await fetchTodayList()
        console.log(category, results, error)
        if (!error) {
          mutations.SET_CATEGORY_LIST(results || [])
          mutations.SET_CATEGORY_TITLE(category || [])
        } else {
          console.log(error)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async onPullingDown () {
      const { category, results, error } = await fetchTodayList()
      if (!error) {
        mutations.SET_CATEGORY_LIST(results || [])
        mutations.SET_CATEGORY_TITLE(category || [])
        this.$refs.scroll.forceUpdate()
      } else {
        this.$refs.scroll.forceUpdate()
        console.log(error)
      }
    },
    async onPullingUp () {
      const result = await this.fetchTodayList()
      console.log(result, 'xx')
    }
  }
}
</script>


<style lang="scss" scoped>
.icon-item {
  > div {
    text-align: center;
    margin-bottom: 0.375rem /* 6/16 */;
  }
}
.slide-item {
  a {
    display: flex;
    justify-content: center;
    img {
    }
  }
}
</style>
