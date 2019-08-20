<template>
  <div class="app-page">
    <AppGrid :border="false" :column-num="2">
      <AppGridItem v-for="(item,index) in tableData" :key="index" class="img-item">
        <div class="img-item-pic">
          <img :src="item.img_src" />
          <span class="number-tips"> 99+ </span>
        </div>
      </AppGridItem>
    </AppGrid>
  </div>
</template>

<script>
import { Grid, GridItem } from "vant";
import { fetchList } from "@/api/sg";

export default {
  components: {
    AppGrid: Grid,
    AppGridItem: GridItem
  },
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.fetchDataList();
  },
  methods: {
    async fetchDataList() {
      try {
        const { error, data } = await fetchList({
          page: 1,
          per_page: 10
        });
        if (!error) {
          this.tableData = data || [];
          // this.$refs.scroll.forceUpdate()
        } else {
          // this.$refs.scroll.forceUpdate()
          console.log(error);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
};
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
    max-width: 100%;
    border-radius: 4px;
    overflow: hidden;
    font-size: 0;
  }
  .number-tips {
    font-size: .875rem /* 14/16 */;
    position: absolute;
    top: .625rem /* 10/16 */;
    right: .25rem /* 4/16 */;
    display: inline-block;
    font-size: 14px;
    margin-top: 5px;
    background: url(http://icon.51yuansu.com/component/index/img/index-cnt-asset.png)
      no-repeat 0px;
    color: #666;
    padding-left: 20px;
  }
}
</style>
