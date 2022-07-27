import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('../components/Login.vue')
  },
  {
    name: 'createSurvey',
    path: '/create',
    component: () => import('../views/Survey/CreateSurvey.vue')
  },
  {
    name: 'submitSurvey',
    path: '/',
    component: () => import('../views/Survey/SubmitSurvey.vue')
  }
]

const Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default Router;


