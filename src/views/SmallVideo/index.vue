

<template>
  <div class="app-page">
    <AppHeader />
    <cube-scroll
      ref="scroll"
      :data="tableData"
      :options="options"
      @pulling-down="fetchDataList"
      @pulling-up="onPullingUp"
    >
      <ul class="list-wrapper">
        <li v-for="(item, index) in tableData" class="list-item-row border-1px" :key="index">
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
            </div>
            <div class="content-box-text">
              <p v-text="item.desc" />
            </div>
            <div class="content-box-footer"></div>
          </div>
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
// import { refreshCurrentRoute } from '@/utils'
import dayjs from 'dayjs'
import { fetchListType } from '@/api/app'
export default {
  data () {
    return {
      options: {
        pullDownRefresh: {
          threshold: 60,
          stop: 40,
          txt: '更新成功'
        }
      },
      tableData: []
    }
  },
  created () {
    console.log('创建了')
  },
  mounted () {
    this.fetchDataList()
  },
  methods: {
    async fetchDataList () {
      try {
        const { results, error } = await fetchListType({
          type: '休息视频',
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
    },
    onPullingUp () {}
  }
}
</script>

<style lang="scss" scoped>
.list-item-row {
  display: flex;
  align-items: center;
  color: #b2bac2;
  overflow: hidden;
  padding-top: 1.375rem /* 22/16 */;
  padding-left: 1rem /* 16/16 */;
  padding-right: 1rem /* 16/16 */;

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
  .content-box-footer {
  }
}
</style>
