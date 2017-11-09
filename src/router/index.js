import Vue from 'vue'
import Router from 'vue-router'
import { AsyncDataPlugin } from 'vue-async-data-2'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'

Vue.use(AsyncDataPlugin)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Hello',
    component: HelloWorld
  },
  {
    path: '/:id',
    name: 'Index',
    component: Index
  }
  ]
})
