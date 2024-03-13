import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Student/StudentDashboard/StudentDashboard.vue')
    },
    {
      path: '/admin/live',
      name: 'live',
      component: () => import('../views/Student/StudentLive/StudentLive.vue')
    },
    {
      path: '/admin/grades',
      name: 'grades',
      component: () => import('../views/Student/StudentGrades/StudentGrades.vue')
    },
    // Profile Instructor
    {
      path: '/admin/profile/instructors',
      name: 'admin-profile-instructors',
      component: () => import('../views/Student/AdminProfile/Instructors/AdminProfileInstructors.vue'),
      meta: {
        pageName: 'Profile'
      }
    },
    {
      path: '/admin/profile/instructors/:id',
      name: 'admin-profile-instructors-view',
      component: () => import('../views/Student/AdminProfile/Instructors/AdminProfileInstuctorView.vue'),
      meta: {
        pageName: 'Profile'
      }
    },
    {
      path: '/dashboard/calander',
      name: 'admin-dashboard-calander',
      component: () => import('../views/Student/AdminDashboard/DashboardCalander/DasboardCalander.vue'),
    },
    {
      path: '/dashboard/cart',
      name: 'admin-dashboard-cart',
      component: () => import('../views/Student/AdminDashboard/DashboardCart/DashboardCart.vue'),
    },
    {
      path: '/dashboard/cart/checkout',
      name: 'admin-dashboard-cart-checkout',
      component: () => import('../views/Student/AdminDashboard/DashboardCart/CartCheckout/CartChekout.vue'),
    },
    {
      path: '/dashboard/settings',
      name: 'admin-dashboard-settings',
      component: () => import('../views/Student/AdminDashboard/DashboardSettings/DashboardSettings.vue'),
    },
  ]
})

export default router
