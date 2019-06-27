<template>
  <v-app id="inspire" class="app dashboard">
    <app-drawer class="app--drawer" :show-drawer="showDrawer"/>
    <app-toolbar class="app--toolbar" @side-icon-click="handleDrawerVisiable"/>
    <v-content>
      <!-- Page Header -->
      <page-header/>
      <div class="page-wrapper">
        <router-view/>
      </div>
      <!-- App Footer -->
      <v-footer height="auto" class="white pa-3 app--footer">
        <span class="caption">isocked.com Design &copy; {{ new Date().getFullYear() }}</span>
        <v-spacer></v-spacer>
        <span class="caption mr-1">Make With Love</span>
        <v-icon color="pink" small>favorite</v-icon>
      </v-footer>
    </v-content>
    <!-- Go to top -->
    <BackTop :height="300" :bottom="20" :right="0" container=".v-content__wrap"/>
    <app-setting/>
  </v-app>
</template>

<script>
import AppDrawer from './AppDrawer'
import AppToolbar from './AppToolbar'
import PageHeader from './PageHeader'
import AppSetting from './settings'
import { BackTop } from 'iview'

export default {
  components: {
    BackTop,
    AppDrawer,
    AppToolbar,
    AppSetting,
    PageHeader
  },

  data () {
    return {
      showDrawer: true
    }
  },
  methods: {
    handleDrawerVisiable () {
      this.showDrawer = !this.showDrawer
    }
  },
  created () {}
}
</script>

<style scoped>
.page-wrapper {
  overflow: auto;
  min-height: calc(100vh - 64px - 50px - 60px);
}
</style>
