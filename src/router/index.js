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
      component: InterLayer,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/',
      component: Home,
      meta:{
        showFooter:true
      }

    },
    {
      path: '/shopping',
      component: Shopping,
      meta:{
        showFooter:true
      }
    },

    {
      path: '/item',
      component: Item,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/person',
      component: Person,
      meta:{
        showFooter: false
      }
    },
    {
      path: '/topic',
      component: Topic,
      meta:{
        showFooter:true
      }
    },

  ]
})
