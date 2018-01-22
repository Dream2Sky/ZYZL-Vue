// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import 'vue-ydui/dist/ydui.base.css'
import axios from 'axios'
import wechatTitle from 'vue-wechat-title'

Vue.config.productionTip = false
Vue.use(YDUI)
Vue.use(wechatTitle)
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
