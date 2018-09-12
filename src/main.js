import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FooterNav from './coponents/FooterNav/FooterNav.vue'
import BScroll from 'better-scroll'

import './mock/mockServer'
// import '../static/css/iconfont.css'

Vue.config.productionTip = false
Vue.component('FooterNav', FooterNav)

/* eslint-disable no-new */
new Vue({
  el: '#app',

  components: {
    App
  },
  template: '<App/>',
  router, // 配置路由器 -->所有组件都多了$router/$route
  store, // 配置vuex的store --> 所有组件对象都多了个$store属性
})

// Vue.store = store
