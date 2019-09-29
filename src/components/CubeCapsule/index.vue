<template>
  <div class="CbueScrollRank" :ref="ref">
    <div
      class="row-item"
      v-for="(item, i) in rows"
      :key="item.toString() + item.scroll"
      :style="`height: ${heights[i]}px;`"
    >
      <div class="ranking-info">
        <!-- <div class="rank">No.{{ item.ranking }}</div> -->
        <div class="info-name">{{ item.name }}</div>
        <!-- <div class="ranking-value">{{ item.value + mergedConfig.unit }}</div> -->
      </div>
      <div class="ranking-column">
        <div class="inside-column" :style="`width: ${item.percent}%;`">
          <div class="shine" />
        </div>
      </div>
      <div class="ranking-value">{{ item.value + mergedConfig.unit }}</div>
    </div>
  </div>
</template>

<script>
import autoResize from '@/minxin/autoResize'

import { deepMerge, deepClone } from '@/utils'

export default {
  name: 'CubeCapsule',
  mixins: [autoResize],
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      ref: 'scroll-ranking-board',

      defaultConfig: {
        /**
         * @description Board data
         * @type {Array<Object>}
         * @default data = []
         */
        data: [],
        /**
         * @description Row num
         * @type {Number}
         * @default rowNum = 5
         */
        rowNum: 5,
        /**
         * @description Scroll wait time
         * @type {Number}
         * @default waitTime = 2000
         */
        waitTime: 2000,
        /**
         * @description Carousel type
         * @type {String}
         * @default carousel = 'single'
         * @example carousel = 'single' | 'page'
         */
        carousel: 'single',
        /**
         * @description Value unit
         * @type {String}
         * @default unit = ''
         * @example unit = 'ton'
         */
        unit: ''
      },

      mergedConfig: null,

      rowsData: [],

      rows: [],

      heights: [],

      animationIndex: 0,

      animationHandler: ''
    }
  },
  watch: {
    config: {
      handler(value) {
        const { stopAnimation, calcData } = this
        stopAnimation()
        calcData()
      },
      deep: true
    }
  },
  methods: {
    afterAutoResizeMixinInit() {
      const { calcData } = this

      calcData()
    },
    onResize() {
      const { mergedConfig, calcHeights } = this

      if (!mergedConfig) return

      calcHeights(true)
    },
    calcData() {
      const { mergeConfig, calcRowsData } = this

      mergeConfig()

      calcRowsData()

      const { calcHeights } = this

      calcHeights()

      const { animation } = this

      animation(true)
    },
    mergeConfig() {
      const { config, defaultConfig } = this

      this.mergedConfig = deepMerge(
        deepClone(defaultConfig, true),
        config || {}
      )
    },
    calcRowsData() {
      // eslint-disable-next-line prefer-const
      let { data, rowNum } = this.mergedConfig

      data.sort(({ value: a }, { value: b }) => {
        if (a > b) return -1
        if (a < b) return 1
        if (a === b) return 0
      })

      const value = data.map(({ value }) => value)

      const max = Math.max(...value) || 0

      data = data.map((row, i) => ({
        ...row,
        ranking: i + 1,
        percent: (row.value / max) * 100
      }))

      const rowLength = data.length

      if (rowLength > rowNum && rowLength < 2 * rowNum) {
        data = [...data, ...data]
      }

      data = data.map((d, i) => ({ ...d, scroll: i }))

      this.rowsData = data
      this.rows = data
    },
    calcHeights(onresize = false) {
      const { height, mergedConfig } = this

      const { rowNum, data } = mergedConfig

      const avgHeight = height / rowNum

      this.avgHeight = avgHeight

      if (!onresize) this.heights = new Array(data.length).fill(avgHeight)
    },
    async animation(start = false) {
      // eslint-disable-next-line prefer-const
      let {
        avgHeight,
        animationIndex,
        mergedConfig,
        rowsData,
        animation
      } = this

      const { waitTime, carousel, rowNum } = mergedConfig

      const rowLength = rowsData.length

      if (rowNum >= rowLength) return

      if (start) await new Promise(resolve => setTimeout(resolve, waitTime))

      const animationNum = carousel === 'single' ? 1 : rowNum

      const rows = rowsData.slice(animationIndex)
      rows.push(...rowsData.slice(0, animationIndex))

      this.rows = rows
      this.heights = new Array(rowLength).fill(avgHeight)

      await new Promise(resolve => setTimeout(resolve, 300))

      this.heights.splice(0, animationNum, ...new Array(animationNum).fill(0))

      animationIndex += animationNum

      const back = animationIndex - rowLength
      if (back >= 0) animationIndex = back

      this.animationIndex = animationIndex
      this.animationHandler = setTimeout(animation, waitTime - 300)
    },
    stopAnimation() {
      const { animationHandler } = this

      if (!animationHandler) return

      clearTimeout(animationHandler)
    }
  },
  destroyed() {
    const { stopAnimation } = this

    stopAnimation()
  }
}
</script>

<style lang="scss" scoped>
.CbueScrollRank {
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;
  font-size: 0.875rem /* 14/16 */;
}
.CbueScrollRank .row-item {
  transition: all 0.3s;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.CbueScrollRank .ranking-info {
  text-align: center;
  display: flex;
  width: 4rem /* 64/16 */;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.CbueScrollRank .ranking-value {
  margin-left: .625rem /* 10/16 */;
  text-align: center;
  display: flex;
  width: 1.875rem /* 30/16 */;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.CbueScrollRank .ranking-info .rank {
  width: 40px;
  color: #1370fb;
}
.CbueScrollRank .ranking-info .info-name {
  flex: 1;
}
.CbueScrollRank .ranking-column {
  flex: 1;
  border-bottom: 2px solid rgba(19, 112, 251, 0.5);
  margin-top: 5px;
}
.CbueScrollRank .ranking-column .inside-column {
  position: relative;
  height: 6px;
  background-color: #1370fb;
  margin-bottom: 2px;
  border-radius: 1px;
  overflow: hidden;
}
.CbueScrollRank .ranking-column .shine {
  position: absolute;
  left: 0%;
  top: 2px;
  height: 2px;
  width: 50px;
  transform: translateX(-100%);
  background: radial-gradient(#28f8ff 5%, transparent 80%);
  animation: shine 3s ease-in-out infinite alternate;
}
@keyframes shine {
  80% {
    left: 0%;
    transform: translateX(-100%);
  }
  100% {
    left: 100%;
    transform: translateX(0%);
  }
}
</style>
