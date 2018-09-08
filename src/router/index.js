import Vue from 'vue'
import Router from 'vue-router'

import InterLayer from '../pages/InterLayer/InterLayer.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Home from '../pages/Home/Home.vue'
import Item from '../pages/Item/Item.vue'
import Person from '../pages/Person/Person.vue'
import Topic from '../pages/Topic/Topic.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/interlayer',
      component: InterLayer
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/shopping',
      component: Shopping
    },

    {
      path: '/item',
      component: Item
    },
    {
      path: '/person',
      component: Person
    },
    {
      path: '/topic',
      component: Topic
    },

  ]
})
