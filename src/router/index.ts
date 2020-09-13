import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Demo from '../views/Demo.vue'
import About from '../views/About.vue'
import VuexDemo from '../views/VuexDemo.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Vue Demo Project',
    component: Demo
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    //  import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: VuexDemo
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    //  import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
]

const router = new VueRouter({
  // add history mode for removing '#' in the url
  // https://stackoverflow.com/questions/34623833/how-to-remove-hashbang-from-url
  mode: 'history',
  routes
})

export default router
