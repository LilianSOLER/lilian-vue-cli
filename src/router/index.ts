import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cours/student/:name',
    name: 'Students',
    component: () => import('../views/Students.vue'),
    props: true
  },
  {
    path: '/school/:levelProp/:titleProp',
    name: 'School',
    component: () => import('../views/School.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
