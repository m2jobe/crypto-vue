import Vue from 'vue'
import VueRouter from 'vue-router'

import BodyHero from './components/body/BodyHero.vue'
import SelectedHero from './components/body/SelectedHero.vue'
import NewsHero from './components/body/NewsHero.vue'
import IcoHero from './components/body/IcoHero.vue'
import ExchangesHero from './components/body/ExchangesHero.vue'
import Exchange from './components/body/Exchange.vue'

Vue.use(VueRouter)

console.log(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: BodyHero
    },
    {
      path: '/currency/:id',
      component: SelectedHero
    },
    {
      path: '/news/',
      component: NewsHero
    },
    {
      path: '/icos/',
      component: IcoHero
    },
    {
      path: '/exchanges/',
      component: ExchangesHero
    },
    {
      path: '/exchange/:id',
      component: Exchange
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
