import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/modules/Index'
import Register from '@/modules/Register'
import Pay from '@/modules/Pay'
import Buy from '@/modules/Buy'
import Check from '@/modules/Check'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/Inde',
      component: Index,
      meta: {
        title: '首页'
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
      path: '/Check',
      name: 'Check',
      component: Check,
      meta: {
        title: '流量卡查询'
      }
    },
    {
      path: '/Buy',
      name: 'Buy',
      component: Buy,
      meta: {
        title: '购买流量卡'
      }
    },
    {
      path: '/Pay',
      name: 'Pay',
      component: Pay,
      meta: {
        title: '充值'
      }
    }
  ]
})
