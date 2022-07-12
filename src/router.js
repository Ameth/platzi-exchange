/* eslint-disable prettier/prettier */
// import Vue from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Error from '@/views/Error'

// Vue.use(VueRouter)

// const routerHistory = createWebHistory()

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error
    }
  ]
})

export default router
