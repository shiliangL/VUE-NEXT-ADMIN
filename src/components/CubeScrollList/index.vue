<template>
  <div class="CubeScrollList">
    <CubeProgressbar reverse style="height:.625rem"  />
    <ul class="scroll-content" :style="{ top }">
      <transition-group name="slide-fade">
        <li class="fadeInUp" v-for="(item,index) in renderList" :key="index">{{item.name}}</li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import CubeProgressbar from '_c/CubeProgressbar'
export default {
  name: 'CubeScrollList',
  components: {
    CubeProgressbar
  },
  data() {
    return {
      prizeList: [
        { name: 0 },
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 }
      ],
      activeIndex: 0
    }
  },
  computed: {
    top() {
      return -this.activeIndex * 50 + 'px'
    },
    renderList() {
      const { prizeList } = this
      const list = prizeList.map(_ =>
        Object.assign(_, {
          createTime: new Date()
        })
      )
      return [...list, list[0]]
    }
  },
  mounted() {
    setInterval(_ => {
      if (this.activeIndex <= this.prizeList.length - 1) {
        this.activeIndex += 1
      } else {
        this.activeIndex = 0
      }
      // const arr = this.prizeList[0]
      // this.prizeList.push(arr)
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.CubeScrollList {
  position: relative;
  width: 200px;
  border: 1px solid blue;
  overflow: hidden;
  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
}

.scroll-content {
  position: relative;
  transition: top 0.5s;
  li {
    line-height: 50px;
    text-align: center;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
