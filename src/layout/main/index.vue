<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" :style="{'background-color': defaultThemeLayout}" />
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
        <tags-view v-if="needTagsView" />
      </div>
      <app-main />
      <AppDrawer v-if="showSettings">
        <settings />
      </AppDrawer>
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Settings, Sidebar, TagsView } from './components'
import ResizeMixin from './ResizeHandler'
import AppDrawer from '_c/AppDrawer'
import { mapActions, mapState } from 'vuex'
import router from '@/router'
import { constantRoutes } from '@/router/routers.js'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    AppDrawer,
    Settings,
    Sidebar,
    TagsView
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    },
    defaultThemeLayout() {
      return this.$store.state.settings.themeLayout
    }
  },
  mounted() {
    console.log('初始化')
    this.generateRoutesMap()
  },
  methods: {
    ...mapActions('permission', ['generateRoutes']),
    async generateRoutesMap() {
      const map = await this.generateRoutes('admin')
      router.resetRouter()
      router.addRoutes([...constantRoutes, ...map])
      console.log(map)
    },
    resetRouter() {
      router.resetRouter()
    },
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
