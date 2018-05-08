import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dambodycount',
      component: require('@/pages/navlist').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
