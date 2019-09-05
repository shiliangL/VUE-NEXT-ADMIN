import Main from '@/layout/main'
import CubeData from '@/views/cubedata'

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
    name: 'cubedata',
    // redirect: 'cubedata',
    meta: {
      title: 'cubedata',
      hideInMenu: true
    },
    component: CubeData
  }
  // {
  //   path: '/home',
  //   name: 'home',
  //   meta: {
  //     title: 'dashboard',
  //     hideInMenu: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       name: 'dashboard',
  //       meta: {
  //         icon: '',
  //         title: 'dashboard'
  //       },
  //       component: () => import('@/views/dashboard/index.vue')
  //     }
  //   ]
  // }
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
