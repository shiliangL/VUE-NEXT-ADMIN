<template>
  <AppPage class="page-wrapper">
    <cube-scroll
      slot="content"
      ref="scroll"
      :data="tableData"
      :options="options"
      @pulling-down="fetchDataList"
      @pulling-up="onPullingUp"
    >
      <ul class="list-wrapper">
        <li v-for="(item, index) in tableData" :key="index" class="list-item-row border-1px" @click="clickItemRow(item)">
          <div class="content-box">
            <div class="content-box-title">
              <ul class="meta-list flex-box">
                <li class="item">
                  <span class="type" v-text="item.type" />
                </li>
                <li class="item">
                  <span v-text="item.who" />
                </li>
                <li class="item">
                  <span v-text="item.createdData" />
                </li>
              </ul>
              <div class="content-box-text">
                <p v-text="item.article_title" />
              </div>
              <div class="content-box-price" v-text="item.article_price" />
              <div class="content-box-footer">
                <span v-text="item.article_mall" /> |
                <span v-text="item.article_type" /> |
                <span v-text="item.article_date" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </cube-scroll>
  </AppPage>
</template>

<script>
// import { refreshCurrentRoute } from '@/utils'
import AppPage from '@/components/AppPage'

import { fetchList } from '@/api/sm'

export default {
  components: {
    AppPage
  },
  data() {
    return {
      options: {
        click: true,
        scrollbar: false,
        pullDownRefresh: {
          threshold: 60,
          stop: 40,
          txt: '更新成功'
        }
      },
      tableData: []
    }
  },
  created() {
    console.log('创建了')
  },
  mounted() {
    this.fetchDataList()
  },
  methods: {
    async fetchDataList() {
      try {
        const { data, error } = await fetchList({
          type: '推荐',
          count: 10,
          page: 1
        })
        if (!error) {
          this.tableData = data || []
          this.$refs.scroll.forceUpdate()
        } else {
          this.$refs.scroll.forceUpdate()
          console.log(error)
        }
      } catch (e) {
        console.log(e)
      }
    },
    onPullingUp() {},
    clickItemRow(item) {
      // this.$router.push({
      //   name: 'PageInfo',
      //   params: {
      //     id: 1
      //   }
      // })
      this.$router.push({
        path: `/PageInfo/${item.article_id}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item-row {
  display: flex;
  align-items: center;
  color: #b2bac2;
  overflow: hidden;
  margin: 0 0 0.625rem /* 10/16 */;
  padding: 0.875rem /* 14/16 */ 0.625rem /* 10/16 */;
  background-color: #fff;

  .content-box-title {
    font-size: 0.75rem /* 12/16 */;
    > ul {
      > li {
        padding: 0 0.25rem /* 4/16 */;
        .type {
          color: #b71ed7;
        }
      }
    }
  }
  .content-box-text {
    padding: 0 0.25rem /* 4/16 */;
    color: #2e3135;
    font-size: 14px;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 1px;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 700;
  }
  .content-box-price {
    padding: .625rem /* 10/16 */ 0;
    color:$theme_color;
    font-size: .875rem /* 14/16 */;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
  .content-box-footer {
  }
}

.page-wrapper {
  background: #eeeeee;
}
</style>
