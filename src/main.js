import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import CompositionApi from "@vue/composition-api";

Vue.use(CompositionApi);

Vue.config.productionTip = false;
require("./styles/main.scss");

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");
