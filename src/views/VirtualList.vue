<template>
  <div class="flex-box">
    <div>
      <h3>DynamicScroller List 共{{AirportList.length}}条</h3>
      <v-btn color="info" @click="clickToEdit">修改数据</v-btn>
      <v-text-field name="login" label="关键词" type="text" v-model.trim="changeText"></v-text-field>
      <DynamicScroller
        v-if="DynamicScroller"
        :items="AirportList"
        :min-item-size="50"
        class="scroller scroll-bar-box"
        key-field="flightId"
      >
        <template slot-scope="{ item, index, active }">
          <DynamicScrollerItem
            :item="item"
            :index="index"
            :active="active"
            :data-index="index"
            :data-active="active"
            class="item-row"
          >
            <div class="index">序号 {{ item.index }}</div>
            <div class="code">{{ item.flightNo }}</div>
            <div class="name">{{ item.flightNo }}</div>
          </DynamicScrollerItem>
        </template>
      </DynamicScroller>
    </div>

    <div>
      <h3>RecycleScroller List 共{{AirportList.length}}条</h3>
      <v-btn color="info" @click="clickToEdit">修改数据</v-btn>
      <v-text-field name="login" label="关键词" type="text" v-model.trim="changeText"></v-text-field>

      <RecycleScroller
        v-if="RecycleScroller"
        ref="RecycleScroller"
        class="scroller scroll-bar"
        :items="AirportList"
        :item-size="44"
        key-field="flightId"
      >
        <template slot-scope="{ item }">
          <div class="item-row">
            <div class="index">序号 {{ item.index }}</div>
            <div class="code">{{ item.flightNo }}</div>
            <div class="name">{{ item.flightNo }}</div>
          </div>
        </template>
      </RecycleScroller>
    </div>
  </div>
</template>

<script>
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import {
  RecycleScroller,
  DynamicScroller,
  DynamicScrollerItem
} from 'vue-virtual-scroller'
export default {
  components: {
    RecycleScroller,
    DynamicScroller,
    DynamicScrollerItem
  },
  data () {
    return {
      DynamicScroller: false,
      RecycleScroller: true,
      changeText: '',
      AirportList: []
    }
  },
  mounted () {
    for (let index = 0; index < 20000; index++) {
      this.AirportList.push({
        index,
        flightId:
          '6C25C073163349E1B9061DE47B8FE1D0' +
          new Date().getTime() +
          Math.random()
            .toString(36)
            .substr(2),
        flightNo: 'HY9012 - ' + index,
        flightDate: '2019-06-24 00:00:00',
        vipLevel: 0,
        isImportant: 0,
        isSpecial: 0,
        depAirport4Code: 'RPLL',
        arrAirport4Code: 'ZGSZ',
        depAirportName: '尼诺阿基诺' + index,
        arrAirportName: '深圳宝安' + index,
        flightStatus: 0,
        releaseStatus: 3,
        etd: '2019-06-24 00:00:00',
        eta: null,
        std: '2019-06-24 01:00:00',
        sta: '2019-06-24 03:15:00',
        isFocusByHand: 1,
        tabFlag: 1,
        crewInfo: null,
        routeCode: null,
        arrAltn1: null,
        arrAltn2: null,
        estPayLoad: 2000,
        extraFuel: null,
        totalFuel: null,
        lineFuel: null,
        acTypeSch: 'XXX',
        acReg: null
      })
    }
  },
  methods: {
    clickToEdit (e) {
      this.$nextTick().then(() => {
        this.$refs['RecycleScroller'].$el.scrollTop = (999) * 44
      })
      this.AirportList[999].index = this.changeText
    }
  }
}
</script>

<style lang="scss" scoped>
.scroller {
  border-top: none;
  height: 500px;
  width: 400px;
  overflow: auto;
  border: 1px solid #dcdee2;

  .item-row {
    cursor: pointer;
    height: 44px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 44px;
    // border-bottom: 1px solid #dcdee2;
    &:hover {
      background: #cbe7ff;
    }
    &.active {
      color: #ffffff;
      background: #2b36a0;
    }
  }
}
</style>
