import Vue from 'vue'
import Router from 'vue-router'
import Registration from '@/components/Registration'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
