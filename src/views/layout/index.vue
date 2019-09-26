<template>
  <div class="Layout">
    <AppSiderMenu />
    <div class="Layout-top">
      Layout - header
    </div>
    <div class="Layout-main">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppSiderMenu from './components/AppSiderMenu'

export default {
  name: 'Layout',
  components: {
    AppSiderMenu
  }
}
</script>

<style lang="scss" scoped>
.Layout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .Layout-top{
    height: 3.75rem /* 60/16 */;
  }
  .Layout-main{
    flex: 1;
    overflow: auto;
  }
}
</style>
