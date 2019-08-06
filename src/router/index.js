import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login')
    },
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: 'today',
          name: 'today',
          component: () => import(/* webpackChunkName: "today" */ '../views/Today')
        },
        {
          path: 'javaScript',
          name: 'javaScript',
          component: () => import(/* webpackChunkName: "javaScript" */ '../views/JavaScript')
        },
        {
          path: 'smallVideo',
          name: 'smallVideo',
          component: () => import(/* webpackChunkName: "smallVideo" */ '../views/SmallVideo')
        },
        {
          path: 'recommend',
          name: 'recommend',
          component: () => import(/* webpackChunkName: "recommend" */ '../views/Recommend')
        },
        {
          path: 'theGirls',
          name: 'theGirls',
          component: () => import(/* webpackChunkName: "theGirls" */ '../views/TheGirls')
        }
      ]
    },
    {
      path: '/redirect/:path*',
      name: 'redirect',
      component: () => import(/* webpackChunkName: "redirect" */ '../views/Redirect')
    },
    {
      path: '*',
      name: 'error_404',
      component: () => import(/* webpackChunkName: "errorpage" */ '../views/ErrorPage')
    }
  ]
})
