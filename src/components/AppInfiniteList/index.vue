<template>
  <div class="AppInfiniteList">AppInfiniteList</div>
</template>

<script>
export default {
  name: 'AppInfiniteList',
  data() {
    return {
      intersectionObserver: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initIntersectionObserver()
    })
  },
  methods: {
    initIntersectionObserver() {
      const box = document.querySelector('.AppInfiniteList')
      const intersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(item => {
          if (item.isIntersecting) {
            console.log('进入可视区域')
          }
        })
      })
      intersectionObserver.observe(box)
    }
  }
}
</script>

<style lang="scss" scoped>
.AppInfiniteList {
  border: 1px solid #cccccc;
  width: 12.5rem /* 200/16 */;
  height: 25rem /* 400/16 */;

  .li-card {
    display: flex;
    justify-content: center;
    list-style: none;
    box-shadow: 2px 2px 9px 0px #bbb;
    padding: 70px 0;
    margin-bottom: 20px;
    border-radius: 10px;
    position: absolute;
    width: 80%;
  }
}
</style>
