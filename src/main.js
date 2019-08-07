import './styles/index.scss'
import Vue from 'vue'
import router from './router'

import './cube-ui'
import './icons'

import App from './App.vue'

import FastClick from 'fastclick'

import { mockXHR } from '../mock'

Vue.config.productionTip = false

//  hack the active pseudo-classes failure caused by -webkit-overflow-scrolling touch
FastClick.attach(document.body)
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
