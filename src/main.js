import Vue from 'vue';
import App from './App.vue';
import { store } from '@/store'
import router from '@/router'
import AsyncComputed from 'vue-async-computed'

const moment = require('moment')
require('moment/locale/fr')

Vue.use(require('vue-moment'), {
  moment
})

Vue.use(AsyncComputed);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')