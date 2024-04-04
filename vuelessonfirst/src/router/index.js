import { createRouter, createWebHistory } from 'vue-router'
import MyPage from "@/views/myPage/MyPage.vue";
import HomeView from "@/views/HomeView/HomeView.vue";
import AboutView from "@/views/AboutView/AboutView.vue";
import ProductView from "@/views/ProductView/ProductView.vue";
import NotFoundView from "@/views/NotFoundView/NotFoundView.vue";
import WeatherView from "@/views/WeatherView/WeatherView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/photos',
      name: 'photos',
      component: MyPage,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not found',
      component: NotFoundView,
    },
    {
      path: '/weather',
      name: 'weather',
      component: WeatherView,
    },
  ]
})

export default router
