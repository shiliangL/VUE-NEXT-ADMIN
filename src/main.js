import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import './styles/element-variables.scss'
import './styles/index.scss'

import Vue from 'vue'
import ElementUI from 'element-ui'
import VueParticles from 'vue-particles'
import VeRing from 'v-charts/lib/ring.common'

import localstore from 'store'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons' // icon

Vue.use(VueParticles)
Vue.use(VeRing)

Vue.use(ElementUI, {
  size: localstore.get('size') || 'small' // set element-ui default size
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
