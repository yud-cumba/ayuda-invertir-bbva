import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/newstops', name: 'NewsTops' },
  { path: '/copiers', name: 'Copiers' },
  { path: '/init', name: 'Init' },
  { path: '/profile', name: 'Profile' },
  // { path: '*', name: 'NotFound' },
];

const routes = routerOptions.map((r) => ({
  ...r,
  component: () => import(/* webpackChunkName: "[request]" */ `@/views/${r.name}/Index.vue`),
}));

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
