import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FooterNav from './coponents/FooterNav/FooterNav.vue'

import './mock/mockServer'
// import '../static/css/iconfont.css'

Vue.config.productionTip = false
Vue.component('FooterNav', FooterNav)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h => h(App),
  router,
  store
})
