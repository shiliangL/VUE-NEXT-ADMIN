import Main from '@/layout/main'
import Layout from '@/views/layout'

/**
 *  标准路由
 */
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/layout/login/index.vue')
  },
  {
    path: '/',
    name: 'layout',
    meta: {
      title: 'layout',
      hideInMenu: true
    },
    component: Layout,
    children: [
      {
        path: '/appmap',
        name: 'appmap',
        meta: {
          title: '地图',
          hideInMenu: true
        },
        component: () => import('@/views/appmap')
      },
      {
        path: '/test',
        name: 'testComponent',
        meta: {
          title: '组件测试',
          hideInMenu: true
        },
        component: () => import('@/views/testComponent')
      },
      {
        path: '/CubeScreen',
        name: 'CubeScreen',
        meta: {
          title: '大屏数据',
          hideInMenu: true
        },
        component: () => import('@/views/CubeScreen')
      },
      // {
      //   path: '/cubeCircleChart',
      //   name: 'CubeCircleChart',
      //   meta: {
      //     title: '圆环图表',
      //     hideInMenu: true
      //   },
      //   component: () => import('@/views/cubeCircleChart')
      // },
      {
        path: '/AppGlass',
        name: 'AppGlass',
        meta: {
          title: '镜面玻璃',
          hideInMenu: true
        },
        component: () => import('@/views/appGlass')
      },
      {
        path: '/aapComponents',
        name: 'aapComponents',
        meta: {
          title: '组件库',
          hideInMenu: true
        },
        component: () => import('@/views/aapComponents')
      },
      {
        path: '/cubeBlock',
        name: 'cubeBlock',
        meta: {
          title: '区块片段',
          hideInMenu: true
        },
        component: () => import('@/views/cubeBlock')
      },
      {
        path: '/eventMap',
        name: 'eventMap',
        meta: {
          title: '地图测试',
          hideInMenu: true
        },
        component: () => import('@/views/eventMap')
      }
    ]
  }
]

/**
 *  异步路由
 */
export const asyncRoutes = [
  {
    path: '/permission',
    component: Main,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/components',
    component: Main,
    redirect: 'noRedirect',
    name: 'AppComponent',
    meta: {
      title: 'Components',
      icon: 'component'
    },
    children: [
      {
        path: 'table',
        component: () => import('@/views/table'),
        name: 'table',
        meta: { title: 'table' }
      },
      {
        path: 'appmap',
        component: () => import('@/views/appmap'),
        name: 'map',
        meta: { title: 'map' }
      }
    ]
  }
]
