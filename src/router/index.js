import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'
import DetailBookView from '../views/DetailBookView.vue'
import TableBookView from '../views/TableBookView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/new-book',
    name: 'new-book',
    component: FormView
  },
  {
    path: '/books',
    name: 'table-book',
    component: TableBookView
  },
  {
    path: '/book-detail/:bookId',
    name: 'detail-book',
    component: DetailBookView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
