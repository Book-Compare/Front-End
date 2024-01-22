import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ListAdmin from '../views/Dashboard/Admins/ListAdmin.vue'
import DefaultLayout from '../layouts/users/TheDefaultLayout.vue'
import AdminLayout from '../layouts/Admin/AdminLayout.vue'
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
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: AdminLayout,
    children: [
      {
        path: '',
        component: AboutView,
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        component: ListAdmin,
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
