import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Index from '@/views/index/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/index/index.vue'),
    // redirect: '/index/main1',
    children: [
      {
        path: '/',
        name: 'Main0',
        component: () => import('../views/main/main.vue')
      },
      {
        path: 'main1',
        name: 'Main1',
        component: () => import('../views/main/main.vue')
      },
      {
        path: 'main2',
        name: 'Main2',
        component: () => import('../views/main/mainTest1.vue')
      },
      {
        path: 'main3',
        name: 'Main3',
        component: () => import('../views/main/mainTest2.vue')
      },
      {
        path: 'blogDetail',
        name: 'BlogDetail',
        component: () => import('../views/blog/blogDetail.vue')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/About.vue')
  // },
  // {
  //   path: '/mainTest1',
  //   name: 'MainTest1',
  //   component: () => import('../views/main/mainTest1.vue')
  // },
  // {
  //   path: '/main',
  //   name: 'Main',
  //   component: () => import('../views/main/main.vue')
  // },
  // {
  //   path: '/main1',
  //   name: 'Main',
  //   component: () => import('../views/main/main.vue')
  // },
  // {
  //   path: '/main2',
  //   name: 'Main',
  //   component: () => import('../views/main/main.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
