import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '',
  //   name: 'toolbar',
  //   component: () => import('../views/Toolbar.vue'),
  //   children: [
  //     {
  //       path: '/',
  //       name: 'home',
  //       component: HomeView
  //     },
  //     {
  //       path: '/about',
  //       name: 'about',
  //       component: () => import('../views/AboutView.vue')
  //     },
  //     {
  //       path: '/profile',
  //       name: 'profile',
  //       component: () => import('../views/Profile.vue')
  //     }
  //   ]
  // },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('../views/Works.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/allproduct',
    name: 'allproduct',
    component: () => import('../views/AllProduct.vue')
  },
  {
    path: '/odin',
    name: 'odin',
    component: () => import('../views/Odin.vue')
  },
  {
    path: '/vandal',
    name: 'vandal',
    component: () => import('../views/Vandal.vue')
  },
  {
    path: '/phantom',
    name: 'phantom',
    component: () => import('../views/Phantom.vue')
  },
  {
    path: '/operator',
    name: 'operator',
    component: () => import('../views/Operator.vue')
  },
  {
    path: '/simple',
    name: 'simple',
    component: () => import('../views/Simple.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router