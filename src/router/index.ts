import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailedArticle from '@/views/DetailedArticle.vue'
import EditArticle from '@/views/EditArticle.vue'


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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/article/:id',
      name: 'DetailedArticle',
      component: DetailedArticle,
      props: true
    },
    {
      path: '/article/edit/:id',
      name: 'EditArticle',
      component: EditArticle,
      props: true
    }
  ]
})

export default router
