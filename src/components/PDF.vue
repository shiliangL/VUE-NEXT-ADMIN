<template>
  <div>
    <a
      download="http://image.cache.timepack.cn/nodejs.pdf"
      target="_blank"
      href="http://image.cache.timepack.cn/nodejs.pdf"
    >查看</a>
    <!-- <iframe src="http://image.cache.timepack.cn/nodejs.pdf" frameborder="0"></iframe> -->
    <embed
      src="http://image.cache.timepack.cn/nodejs.pdf"
      type="application/pdf"
      width="100%"
      height="100%"
    >
    <input type="checkbox" v-model="show">
    <select v-model="src" style="width: 30em">
      <option v-for="(item,index) in pdfList" :value="item" :key="index" v-text="item"></option>
    </select>
    <input v-model.number="page" type="number" style="width: 5em">
    /{{numPages}}
    <button @click="rotate += 90">&#x27F3;</button>
    <button @click="rotate -= 90">&#x27F2;</button>
    <button @click="$refs.pdf.print()">print</button>
    <div style="width: 50%">
      <div
        v-if="loadedRatio > 0 && loadedRatio < 1"
        style="background-color: green; color: white; text-align: center"
        :style="{ width: loadedRatio * 100 + '%' }"
      >{{ Math.floor(loadedRatio * 100) }}%</div>
      <pdf
        v-if="show"
        ref="pdf"
        style="border: 1px solid red"
        :src="src"
        :page="page"
        :rotate="rotate"
        @password="password"
        @progress="loadedRatio = $event"
        @error="error"
        @numPages="numPages = $event"
      ></pdf>
    </div>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
import axios from 'axios'

export default {
  components: {
    pdf: pdf
  },
  data () {
    return {
      show: true,
      pdfList: [
        'http://image.cache.timepack.cn/nodejs.pdf',
        'data:application/pdf;base64,JVBERi0xLjUKJbXtrvsKMyAwIG9iago8PCAvTGVuZ3RoIDQgMCBSCiAgIC9GaWx0ZXIgL0ZsYXRlRGVjb2RlCj4+CnN0cmVhbQp4nE2NuwoCQQxF+/mK+wMbk5lkHl+wIFislmIhPhYEi10Lf9/MVgZCAufmZAkMppJ6+ZLUuFWsM3ZXxvzpFNaMYjEriqpCtbZSBOsDzw0zjqPHZYtTrEmz4eto7/0K54t7GfegOGCBbBdDH3+y2zsMsVERc9SoRkXORqKGJupS6/9OmMIUfgypJL4KZW5kc3RyZWFtCmVuZG9iago0IDAgb2JqCiAgIDEzOAplbmRvYmoKMiAwIG9iago8PAogICAvRXh0R1N0YXRlIDw8CiAgICAgIC9hMCA8PCAvQ0EgMC42MTE5ODcgL2NhIDAuNjExOTg3ID4+CiAgICAgIC9hMSA8PCAvQ0EgMSAvY2EgMSA+PgogICA+Pgo+PgplbmRvYmoKNSAwIG9iago8PCAvVHlwZSAvUGFnZQogICAvUGFyZW50IDEgMCBSCiAgIC9NZWRpYUJveCBbIDAgMCA1OTUuMjc1NTc0IDg0MS44ODk3NzEgXQogICAvQ29udGVudHMgMyAwIFIKICAgL0dyb3VwIDw8CiAgICAgIC9UeXBlIC9Hcm91cAogICAgICAvUyAvVHJhbnNwYXJlbmN5CiAgICAgIC9DUyAvRGV2aWNlUkdCCiAgID4+CiAgIC9SZXNvdXJjZXMgMiAwIFIKPj4KZW5kb2JqCjEgMCBvYmoKPDwgL1R5cGUgL1BhZ2VzCiAgIC9LaWRzIFsgNSAwIFIgXQogICAvQ291bnQgMQo+PgplbmRvYmoKNiAwIG9iago8PCAvQ3JlYXRvciAoY2Fpcm8gMS4xMS4yIChodHRwOi8vY2Fpcm9ncmFwaGljcy5vcmcpKQogICAvUHJvZHVjZXIgKGNhaXJvIDEuMTEuMiAoaHR0cDovL2NhaXJvZ3JhcGhpY3Mub3JnKSkKPj4KZW5kb2JqCjcgMCBvYmoKPDwgL1R5cGUgL0NhdGFsb2cKICAgL1BhZ2VzIDEgMCBSCj4+CmVuZG9iagp4cmVmCjAgOAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDA1ODAgMDAwMDAgbiAKMDAwMDAwMDI1MiAwMDAwMCBuIAowMDAwMDAwMDE1IDAwMDAwIG4gCjAwMDAwMDAyMzAgMDAwMDAgbiAKMDAwMDAwMDM2NiAwMDAwMCBuIAowMDAwMDAwNjQ1IDAwMDAwIG4gCjAwMDAwMDA3NzIgMDAwMDAgbiAKdHJhaWxlcgo8PCAvU2l6ZSA4CiAgIC9Sb290IDcgMCBSCiAgIC9JbmZvIDYgMCBSCj4+CnN0YXJ0eHJlZgo4MjQKJSVFT0YK'
      ],
      src: '',
      loadedRatio: 0,
      page: 1,
      numPages: 0,
      rotate: 0
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    password: function (updatePassword, reason) {
      updatePassword(prompt('password is "test"'))
    },
    error: function (err) {
      console.log(err)
    },
    fetchData () {
      const http = axios.create({
        headers: {
          // 'Access-Control-Allow-Credentials': true,
          // 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD',
          // 'Access-Control-Max-Age': 86400,
          // 'Cache-control': 'private',
          // 'Content-Encoding': 'gzip',
          // 'Content-Type': 'application/json; charset=utf-8',
          // 'Vary': 'Accept-Encoding',
          // 'X-Powered-By-Defense': 'from pon-wyxm-tel-qs-qssec-kd52'
        }
      })
      http(
        'ajax_home_list_show?timesort=156136123714&past_num=20'
      )
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          debugger
          console.log(error)
        })
    }
  }
}
</script>
