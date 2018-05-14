import Vue from 'vue'
import Router from 'vue-router'
import family from '@/components/family'
import character from '@/components/character'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'family',
      component: family
    },
    {
      path: '/character',
      name: 'character',
      component: character
    }
  ]
})
