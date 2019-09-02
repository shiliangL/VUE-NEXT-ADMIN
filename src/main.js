import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css';
import './styles/element-variables.scss'
import './styles/index.scss'

import localstore from 'store'
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router'
import store from './store'

Vue.use(ElementUI, {
  size: localstore.get('size') || 'medium' // set element-ui default size
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
