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
    component: () => import('../views/index/index.vue'),
    // redirect: '/index/main1',
    children: [
      {
        path: '/',
        component: () => import('../views/main/main.vue')
      },
      {
        path: 'main',
        name: 'Main',
        component: () => import('../views/main/main.vue')
      },
      {
        path: 'liZiMain',
        name: 'LiZiMain',
        component: () => import('../views/main/liZiMain.vue')
      },
      {
        path: 'javaMain',
        name: 'JavaMain',
        component: () => import('../views/main/javaMain.vue')
      },
      {
        path: 'searchMain/:str',
        name: 'SearchMain',
        component: () => import('../views/main/searchMain.vue')
      },
      {
        path: 'aboutHistory',
        name: 'AboutHistory',
        component: () => import('../views/main/aboutHistory.vue')
      },
      {
        path: 'blogDetail/:id',
        name: 'BlogDetail',
        component: () => import('../views/blog/blogDetail.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: '/dist/',
  routes
})

export default router
