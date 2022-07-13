import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('../components/Login.vue')
  },
  {
    name: 'createSurvey',
    path: '/',
    component: () => import('../views/Survey/CreateSurvey.vue')
  }
]

const Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default Router;


