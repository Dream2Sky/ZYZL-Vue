import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/modules/Register'
import CardList from '@/modules/Cards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/Cards',
      name: 'Cards',
      component: CardList,
      meta: {
        title: '流量卡列表'
      }
    }
  ]
})
