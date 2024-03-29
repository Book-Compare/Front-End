import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import DetailNewsView from '../views/DetailNewsView.vue'
import DetailView from '../views/DetailView.vue'
import ProductView from '../views/ProductView.vue'
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
    meta: {
      title: 'Sosanhsach.com - Trang so sánh các sản phẩm về sách'
    },
    children: [
      {
        path: '',
        component: HomeView,
      },
    ],
  },
  {
    path: '/:name',
    name: 'detail',
    component: DefaultLayout,
    props: true,
    children: [
      {
        path: '',
        component: DetailView,
      },
    ],
  },
  {
    path: '/product',
    name: 'product',
    component: DefaultLayout,
    props: true,
    children: [
      {
        path: '',
        component: ProductView,
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
    path: '/news/:id',
    name: 'detail news',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: DetailNewsView,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: DefaultLayout,
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
    document.title = to.params.name ? `${to.params.name.split('-').join(' ')} - Sosanhsach.com`
     : to.meta.title || 'Trang không tồn tại';
    next();
});

export default router
