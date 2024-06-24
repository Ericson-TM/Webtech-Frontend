import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import TrainingsplanView from '@/views/TrainingsplanView.vue'
import KontaktView from '@/views/KontaktView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/about',
      name: 'about',
      component: AboutView
    },

    {
      path: '/trainingsplaene',
      name: 'trainingsplaene',
      component: TrainingsplanView
    },

    {
      path: '/contact',
      name: 'contact',
      component: KontaktView
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView
    },

    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }

  ]
})

export default router
