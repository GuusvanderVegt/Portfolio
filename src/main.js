import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import CompositionApi from "@vue/composition-api";

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);

Vue.use(CompositionApi);

require("@/assets/styles/main.scss");

Vue.config.productionTip = false;
require("./styles/main.scss");

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");
