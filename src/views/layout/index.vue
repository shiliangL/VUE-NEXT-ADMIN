<template>
  <div class="application--wrap">
    <aside class="app-aside aside navigation-drawer--open">
      <section class="aside-list">
        <div v-for="item in 100" :key="item">{{ item }}</div>
      </section>
    </aside>

    <nav class="app-navbar">
      <div class="flex-box app-navbar-content"></div>
    </nav>
    <main class="content">
      <div class="content-wrap">

        <div class="flex-box">
          <div v-for="item in 100" :key="item">{{ item }}</div>
        </div>
        <div v-for="item in 1000" :key="item">{{ item }} 什么鬼 </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="less" scoped>
.application--wrap {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
  background: #cccccc;
  .aside {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    max-width: 100%;
    overflow: hidden;
    padding: 0 0 100px;
    z-index: 3;
    height: 100%;
    height: ~"calc(100% - 0px)";
    transform: translateX(0px);
    pointer-events: auto;
    will-change: transform;
    background: #ffffff;
    width: 260px;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    .aside-list {
      height: ~"calc(100vh - 40px)";
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
  .app-navbar {
    background-color: #3f51b5 !important;
    border-color: #3f51b5 !important;
    position: fixed;
    z-index: 4;
    padding-left: 260px;
    transform: translateY(0px);
    overflow: hidden;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    display: block;
    width: 100%;
    will-change: padding-left;
    .app-navbar-content {
      height: 64px;
    }
  }
  .content {
    margin: 64px 0px 0px 260px;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transition: none;
    display: -ms-flexbox;
    display: flex;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    max-width: 100%;
    will-change: padding;
    .content-wrap {
      flex: 1 1 auto;
      max-width: 100%;
      height: ~"calc(100vh - 64px)";
      overflow-y: auto;
      overflow-x: auto;
      word-break: keep-all;
      white-space: nowrap;
    }
  }
}
</style>
