import Vue from 'vue';
import App from './App.vue';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import VueFusionCharts from 'vue-fusioncharts';
import { store } from '@/store'
import router from '@/router'
import AsyncComputed from 'vue-async-computed'

Charts(FusionCharts);
PowerCharts(FusionCharts);
Widgets(FusionCharts);
FusionTheme(FusionCharts);

Vue.use(VueFusionCharts, FusionCharts);
Vue.use(AsyncComputed);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')