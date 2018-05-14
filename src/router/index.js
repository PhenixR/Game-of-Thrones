import Vue from 'vue'
import Router from 'vue-router'
import itemcontainer from '@/components/itemcontainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'itemcontainer',
      component: itemcontainer
    }
  ]
})
