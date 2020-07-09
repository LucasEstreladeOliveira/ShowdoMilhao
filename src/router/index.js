import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../views/Menu'
import Game from '../views/Game'
import Win from '../views/Win'
import Score from '../views/Score'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/win',
    name: 'Win',
    component: Win
  },
  {
    path: '/score',
    name: 'Score',
    component: Score
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
