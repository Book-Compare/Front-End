import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DefaultLayout from '../layouts/TheDefaultLayout.vue'
import DashboardLayout from '../layouts/TheDashboardLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: HomeView,
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: DashboardLayout,
    children: [
      {
        path: '',
        component: AboutView,
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
