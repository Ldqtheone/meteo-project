import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Forecast from "../components/Forecast.vue";

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/forecast/:city",
            name: "Forecast",
            component: Forecast
        }
    ]
});