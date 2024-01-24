import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ListAdmin from '../views/Dashboard/Admins/ListAdmin.vue'
import LoginAdmin from '../views/Dashboard/Auth/LoginAdmin.vue'
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
    meta: { requiresAuth: true },
    component: AdminLayout,
    children: [
      {
        path: '',
        component: ListAdmin,
      },
    ],
  },
  {
    path: '/admin/login',
    name: 'adminLogin',
    component: '',
    children: [
      {
        path: '',
        component: LoginAdmin,
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the user is logged in by verifying the token
    const token = localStorage.getItem('token');

    if (!token) {
      // If token is not present, redirect to login page
      next({ name: 'adminLogin' });
    } else {
      // If token is present, proceed to the route
      next();
    }
  } else {
    // If the route does not require authentication, proceed to the route
    next();
  }
});

export default router
