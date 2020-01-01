import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/guide'
  },
  {
    path: '/guide',
    name: 'Guide',
    meta:{
      title: '导航页'
    },
    component: () => import('../views/index/guide.vue'),
  },
  {
    path: '/index',
    name: 'Index',
    meta:{
      title: '主页'
    },
    component: () => import('../views/index/index.vue'),
    // redirect: '/index/main1',
    children: [
      {
        path: '/',
        meta:{
          title: '主页'
        },
        component: () => import('../views/main/main.vue')
      },
      {
        path: 'main',
        name: 'Main',
        meta:{
          title: '主页'
        },
        component: () => import('../views/main/main.vue')
      },
      {
        path: 'liZiMain',
        name: 'LiZiMain',
        meta:{
          title: '栗子生活'
        },
        component: () => import('../views/main/liZiMain.vue')
      },
      {
        path: 'javaMain',
        name: 'JavaMain',
        meta:{
          title: 'java技术'
        },
        component: () => import('../views/main/javaMain.vue')
      },
      {
        path: 'searchMain/:str',
        name: 'SearchMain',
        meta:{
          title: '搜索结果'
        },
        component: () => import('../views/main/searchMain.vue')
      },
      {
        path: 'aboutHistory',
        name: 'AboutHistory',
        meta:{
          title: '版本历史'
        },
        component: () => import('../views/main/aboutHistory.vue')
      },
      {
        path: 'blogDetail/:id',
        name: 'BlogDetail',
        meta:{
          title: '博客'
        },
        component: () => import('../views/blog/blogDetail.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  // base: '/lmorange/',
  routes
})

export default router
