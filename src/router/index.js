import Vue from 'vue';
import VueRouter from 'vue-router';
import WeatherShow from '../views/WeatherShow.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/forecast',
    name: 'Weather',
    component: () => import('../views/Weather.vue'),
  },
  {
    path: '/weather/:zip',
    name: 'weather-show',
    component: WeatherShow,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
