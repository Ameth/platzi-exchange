/* eslint-disable prettier/prettier */
// import Vue from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Error from '@/views/Error'
import CoinDetail from '@/views/CoinDetail'

// Vue.use(VueRouter)

// const routerHistory = createWebHistory()

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/coin/:id',
      name: 'coin-detail',
      component: CoinDetail
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: Error
    }
  ]
})

export default router
