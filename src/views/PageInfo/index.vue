<template>
  <div class="detail-warp">
    <div class="title">
      <span v-text="form.article_mall" /> |
      <span v-text="form.article_type" /> |
      <span v-text="form.article_date" />
    </div>
    <div class="main-title">
      <h1 v-text="form.article_title" />
    </div>
    <div class="tags">
      <AppTage
        v-for="(item,index) in form.category_names"
        :key="index"
        type="primary"
        plain
        round
      >{{ item }}</AppTage>
    </div>
    <div class="content-box-price">
      <span v-text="form.article_price" />
    </div>
    <span class="link-btn" inline light>{{ form.buy_button_name }}</span>
    <div class="content" v-html="form.article_content" />
  </div>
</template>

<script>
import { Tag } from 'vant'
import { fetchDetail } from '@/api/sm'
export default {
  name: 'PageInfo',
  components: {
    AppTage: Tag
  },
  data() {
    return {
      form: {
        article_mall: '',
        article_type: '',
        article_date: '',
        article_title: '',
        article_price: '',
        article_content: '',
        category_names: []
      }
    }
  },
  created() {
    const { id } = this.$route.params
    if (!id) return
    this.fetchDataList(id)
  },
  methods: {
    async fetchDataList(id) {
      try {
        const { data, error } = await fetchDetail({ id })
        if (!error) {
          this.form = Object.assign(this.form, data)
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
.detail-warp {
  background: #ffffff;

  .main-title {
    h1 {
      font-size: 1.125rem /* 18/16 */;
      margin-bottom: 0.625rem /* 10/16 */;
      color: #555;
      font-weight: 700;
    }
  }

  .content-box-price {
    color: $theme_color;
  }
  .tags {
    span {
      display: inline-block;
      margin-right: 0.375rem /* 6/16 */;
    }
  }
  .link-btn {
    background: $theme_color;
    color: #ffffff;
    font-size: .75rem /* 12/16 */;
    height: 1.5rem /* 24/16 */;
    line-height: 1.5rem /* 24/16 */;
    border-radius: .125rem /* 2/16 */;
    display: inline-block;
    padding:0 .625rem /* 10/16 */;
    cursor: pointer;
    margin: .375rem /* 6/16 */ 0 ;
  }

  .content {
    line-height: 1.8em;
    margin-bottom: 0.875rem /* 14/16 */;
    color: #444;
    word-wrap: break-word;
    word-break: break-all;
  }
}
</style>
