import Vue from "vue";
import Vuex from "vuex";
import userModule from "./modules/user";
import cryptoModule from "./modules/crypto";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const userState = createPersistedState({
    paths: ["user"],
    storage: window.sessionStorage
});

export default new Vuex.Store({
    modules: {
        user: userModule,
        crypto: cryptoModule
    },

    plugins: [userState]
});
