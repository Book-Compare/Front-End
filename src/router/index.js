import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import ListAdmin from '../views/Dashboard/Admins/ListAdmin.vue'
import ActionLog from '../views/Dashboard/Logs/ActionLog.vue'
import LoginAdmin from '../views/Dashboard/Auth/LoginAdmin.vue'
import LoginUser from '../views/Dashboard/Auth/LoginUser.vue'
import RegisterUser from '../views/Dashboard/Auth/RegisterUser.vue'
import DefaultLayout from '../layouts/users/TheDefaultLayout.vue'
import AdminLayout from '../layouts/Admin/AdminLayout.vue'

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
    path: '/news',
    name: 'news',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: NewsView,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: LoginUser,
    children: [
      {
        path: '',
        component: LoginUser,
      },
    ],
  },
  {
    path: '/register',
    name: 'register',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: RegisterUser,
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
        component: '',
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
    component: LoginAdmin,
    children: [
      {
        path: '',
        component: LoginAdmin,
      },
    ],
  },
  {
    path: '/admin/actionlog',
    name: 'actionLog',
    component: AdminLayout,
    children: [
      {
        path: '',
        component: ActionLog,
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
