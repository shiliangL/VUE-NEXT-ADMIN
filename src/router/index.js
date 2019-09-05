import Vue from 'vue'
import Router from 'vue-router'
import { constantRoutes } from './routers'
import store from 'store'

// import config from '@/config'
// const { homeName } = config

Vue.use(Router)

const createRouter = () => new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

const LOGIN_PAGE_NAME = 'login'

// const turnTo = (to, access, next) => {
//   if (canTurnTo(to.name, access, routes)) next() // 有权限，可访问
//   else next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
// }

router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start()
  const token = store.get('token')
  // 未登录且要跳转的页面不是登录页
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // iView.LoadingBar.finish()
    // 跳转到登录页
    // next({ name: LOGIN_PAGE_NAME })
    next()
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // iView.LoadingBar.finish()
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // iView.LoadingBar.finish()
    // 已登录且要跳转的页面是登录页
    next()
  } else {
    next()
  }
})

router.afterEach(to => {
  console.log(to)
  // setTitle(to, router.app)
  // window.scrollTo(0, 0)
})

router.onError(error => {
  console.log(error)
  // iView.Message.error(`加载页面异常，${error.message}`)
  // iView.LoadingBar.error()
})

router.resetRouter = () => {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
