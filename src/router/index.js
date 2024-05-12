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
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
