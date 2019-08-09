<template>
  <div class="app-page">
    <AppGrid :border="false" :column-num="3">
      <AppGridItem v-for="(item,index) in tableData" :key="index" class="img-item">
        <div class="img-item-pic" :style="{backgroundImage: 'url(' + item.img_src + ')'}" />
        <img :src="item.img_src">
      </AppGridItem>
    </AppGrid>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant'
import { fetchList } from '@/api/sg'

export default {
  components: {
    AppGrid: Grid,
    AppGridItem: GridItem
  },
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.fetchDataList()
  },
  methods: {
    async fetchDataList() {
      try {
        const { error, data } = await fetchList({
          page: 1,
          per_page: 10
        })
        if (!error) {
          this.tableData = data || []
          // this.$refs.scroll.forceUpdate()
        } else {
          // this.$refs.scroll.forceUpdate()
          console.log(error)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.img-item {
  .img-item-pic {
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  img {
    max-width: 100px;
    height: 100px;
    border-radius: 4px;
  }
}
</style>
