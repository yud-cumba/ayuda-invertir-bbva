import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routerOptions = [
  { path: '/', name: 'Login' },
  { path: '/newstops', name: 'NewsTops' },
  { path: '/recommend', name: 'Recommend' },
  { path: '/copiers', name: 'Copiers' },
  { path: '/copiers/:id', props: true, name: 'CopiersDetails' },
  { path: '/news', name: 'News' },
  { path: '/init', name: 'Init' },
  { path: '/profile', name: 'Profile' },
  { path: '/invest', name: 'Invest' },
  { path: '/trading/id', name: 'Trading' },
  { path: '/dreams', name: 'Dreams' },
  { path: '/BBVAHome', name: 'BBVAHome' },
  { path: '/advice', name: 'Advice' },
  { path: '/loading', name: 'Loading' },
  { path: '/portfolio', name: 'PortfolioAuto' },
  { path: '*', name: 'NotFound' },
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
