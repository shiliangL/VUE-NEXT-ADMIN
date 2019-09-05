<template>
  <div>
    <div class="box">
      <DataBoxCard title="工作评级" :dheight="260">主要区域测试</DataBoxCard>
    </div>
  </div>
</template>

<script>
import DataBoxCard from '_c/DataBoxCard'
export default {
  components: {
    DataBoxCard
  }
}
</script>

<style lang="scss" scoped>
.box {
  background: #0b0012;
  border-radius: 3px;
  box-shadow: 2px 6px 17px rgba(0, 0, 0, 0.39);
}
</style>
