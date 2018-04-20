import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'

Vue.use(VueResource)
// Use element for templating
Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/signup',
          name: 'signup',
          component: Signup
        }
      ]
    }
  ]
})
