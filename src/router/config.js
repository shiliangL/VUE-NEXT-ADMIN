import DefaultLayout from '@/layout/index.vue'

export const publicRoute = [
  { path: '*', component: () => import(/* webpackChunkName: "errors-404" */ '@/views/error/NotFound.vue') },

  {
    path: '/404',
    name: '404',
    meta: { title: 'Not Found' },
    component: () => import(/* webpackChunkName: "errors-404" */ '@/views/error/NotFound.vue')
  },

  {
    path: '/500',
    name: '500',
    meta: { title: 'Server Error' },
    component: () => import(/* webpackChunkName: "errors-500" */ '@/views/error/Error.vue')
  }
]

export const protectedRoute = [
  {
    path: '/',
    component: DefaultLayout,
    meta: { title: 'Home', group: 'apps', icon: '' },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: { title: 'Home', group: 'apps', icon: 'dashboard' },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue')
      },

      {
        path: '/403',
        name: 'Forbidden',
        meta: { title: 'Access Denied', hiddenInMenu: true },
        component: () => import(/* webpackChunkName: "error-403" */ '@/views/error/Deny.vue')
      }
    ]
  },

  // list
  {
    path: '/cms',
    component: DefaultLayout,
    redirect: '/cms/table',
    meta: { title: 'CMS', icon: 'view_compact', group: 'cms' },
    children: [
      {
        path: '/cms/table',
        name: 'ListTable',
        meta: { title: 'CMS Table' },
        component: () => import(/* webpackChunkName: "table" */ '@/views/list/Table.vue')
      }
    ]
  },

  // media
  {
    path: '/media',
    meta: { title: 'Media', group: 'apps', icon: 'media' },
    name: 'Media',
    props: route => ({ type: route.query.type }),
    component: () => import(/* webpackChunkName: "routes" */ `@/views/Media.vue`)
  },

  // chat app

  // mail app
  {
    path: '/mail',
    meta: {
      public: true
    },
    name: 'Mail',
    component: () => import(/* webpackChunkName: "routes" */ `@/components/email/Layout.vue`),
    redirect: {
      path: '/mail/all'
    },
    children: [
      {
        path: '/mail/:mailType',
        meta: {
          public: true
        },
        name: 'MailIndex',
        component: () => import(/* webpackChunkName: "routes" */ `@/components/email/List.vue`)
      },
      {
        path: '/mail/0/:uuid',
        meta: {
          public: true
        },
        name: 'MailDetail',
        component: () => import(/* webpackChunkName: "routes" */ `@/components/email/Reply.vue`)
      }
    ]
  }
]
