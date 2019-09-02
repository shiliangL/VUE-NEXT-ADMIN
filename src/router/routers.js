import Main from '@/layout/main'

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import('@/layout/login/index.vue')
  },
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'module - 导航',
      hideInMenu: true
    },
    component: Main,
    children:[
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          icon: '',
          title: '部门'
        },
        component: () => import('@/views/dashboard/index.vue')
      },
    ]
  }
]
