import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
// Use element for templating
Vue.use(Element)
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
