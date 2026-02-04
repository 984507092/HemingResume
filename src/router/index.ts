import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
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

const base = typeof import.meta.env.BASE_URL === 'string' ? import.meta.env.BASE_URL : ''
const router = createRouter({
  history: createWebHashHistory(base),
  routes,
})

export default router
