import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Monsters from '../components/Monsters'
import UserProfile from '../components/UserProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/monsters',
      name: 'Monsters',
      component: Monsters
    },
    {
      path: '/profile',
      name: 'Profile',
      component: UserProfile
    }
  ]
})
