<template>
  <div>
    <div v-for="(item, index) in 10" :key="index"> {{ item }}</div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.app-grid {
  display: flex;
  flex-wrap: wrap;
}
</style>
