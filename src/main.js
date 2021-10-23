import Vue from 'vue';

import ReactiveSearch from '@appbaseio/reactivesearch-vue';
import 'chartjs-plugin-colorschemes';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(ReactiveSearch);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
