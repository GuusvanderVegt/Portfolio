const store = {
    data: null,
    accessToken: null
}

const getters = {
    getAccessToken : state => {
        return state.accessToken;
    }

}

const actions = {

}

const mutations = {
    SET_USER(state, user){
        state.data = user;
    },

    SET_ACCESS_TOKEN(state, token) {
        state.accessToken = token;
    }
}

export default {
    namespaced: true,
    store,
    getters,
    actions,
    mutations
}