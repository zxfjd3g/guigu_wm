import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 异步引入路由组件, 实现路由懒加载
const msite = () => import('pages/msite/msite')
const search = () => import('pages/search/search')
const order = () => import('pages/order/order')
const profile = () => import('pages/profile/profile')
const login = () => import('pages/login/login')

// 所有路由的数组
const routes = [
  // 地址为空时跳转msite页面
  {
    path: '/',
    redirect: '/msite'
  },
  // 所有商铺列表页
  {
    path: '/msite',
    component: msite,
    meta: {keepAlive: true, isTop: true},
  },

  //搜索页
  {
    path: '/search/:geohash',
    component: search,
    meta: {keepAlive: true, isTop: true},
  },
  //订单列表页
  {
    path: '/order',
    component: order,
    meta: {keepAlive: true, isTop: true},
  },
  // 个人中心
  {
    path: '/profile',
    component: profile,
    meta: {keepAlive: true, isTop: true},
  },
  // 登录注册页
  {
    path: '/login',
    component: login
  },
]

export default new Router({
  routes
})
