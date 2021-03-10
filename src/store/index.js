import Vue from "vue";
import Vuex from "vuex";
import userModule from "./modules/user";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const userState = createPersistedState({
    paths: ["user"],
    storage: window.sessionStorage
});

export default new Vuex.Store({
    modules: {
        user: userModule
    },

    plugins: [userState]
});
