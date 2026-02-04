import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/template2',
  },
  {
    path: '/template1',
    name: 'Template1',
    component: () => import('@/views/template1/index.vue'),
  },
  {
    path: '/template2',
    name: 'Template2',
    component: () => import('@/views/template2/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
