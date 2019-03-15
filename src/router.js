import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login/Login.vue'
import Signup from './views/Login/Signup.vue'

import Dashboard from './views/Dashboard/Dashboard.vue'
import System from './views/Dashboard/System/System.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard/system/:systemId',
      component: System
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/',
      redirect: "/login",
      beforeEnter: (to, from, next) => {
        if (to == "/login") {
          this.$store.commit("setDrawer", false)
          next
        }
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
