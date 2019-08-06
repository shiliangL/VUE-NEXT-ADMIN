<template>
  <div class="app-page">
    <AppHeader />
    <AppGrid :border="false" :column-num="3">
      <AppGridItem class="img-item" v-for="(item,index) in tableData" :key="index">
        <div class="img-item-pic" :style="{backgroundImage: 'url(' + item.url + ')'}"></div>
        <img :src="item.url" />
      </AppGridItem>
    </AppGrid>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant'
import { fetchListType } from '@/api/app'
import dayjs from 'dayjs'

export default {
  components: {
    AppGrid: Grid,
    AppGridItem: GridItem
  },
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.fetchDataList()
  },
  methods: {
    async fetchDataList () {
      try {
        const { results, error } = await fetchListType({
          type: '福利',
          count: 10,
          page: 1
        })
        if (!error) {
          for (const item of results || []) {
            item.createdData = dayjs(item.createdAt).format('YYYY-MM-DD HH:mm')
          }
          this.tableData = results || []
          this.$refs.scroll.forceUpdate()
        } else {
          this.$refs.scroll.forceUpdate()
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
    height: 67px;
    margin: 0 10px 16px;
    border-radius: 4px;
  }
}
</style>
