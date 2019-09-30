<template>
  <div>

  <h1 @click="cubeBlock">   cubeBlock </h1>
  <h1 @click="cubeBlockStop">   cubeBlockStop  </h1>

  </div>
</template>

<script>
import PhoneClass from '@/utils/PhoneClass'
export default {
  name: 'CubeBlock',
  data() {
    return {
      PhoneClass: null
    }
  },
  mounted() {
    this.PhoneClass = new PhoneClass()
    this.PhoneClass.init()
  },
  methods: {
    cubeBlock() {
      this.PhoneClass.startTalke('13302232011', ({ status, msg }) => {
        if (status) {
          this.phoneIng = true
        } else {
          this.$message({ message: '设备不在线' + msg, type: 'warning' })
          return
        }
      })
    },
    cubeBlockStop() {
      this.PhoneClass.stopTalke('13302232011', ({ status, msg }) => {
        if (status) {
          this.phoneIng = true
        } else {
          this.$message({ message: '设备不在线' + msg, type: 'warning' })
          return
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
