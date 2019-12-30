import Vue from 'vue'
import Router from 'vue-router'
import Home from  '@/components/Home'

// const Home = () => import('../components/Home')
const Stydy = () => import('../components/Study')
const Square = () => import('../components/Square')
const Personal = () => import('../components/Personal')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path: '/Home',
      name: 'Home',
      component:Home
    },
    {
      path: '/Stydy',
      name: 'Stydy',
      component: Stydy
    },
    {
      path: '/Square',
      name: 'Square',
      component: Square
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal
    }
  ]
})
