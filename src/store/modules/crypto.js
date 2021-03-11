const state = {
    errors: null,
    balances: null
};

const getters = {
    getBalances(state) {
        return state.balances;
    },

    getBalance: state => valuta => {
        if (!valuta) {
            state.error = "No valuta provided!";
            throw new Error("No valuta provided!");
        }

        return state.balances.find(
            balance => balance.symbol == valuta.toUppercase()
        );
    }
};

const actions = {};

const mutations = {
    SET_ERROR(state, error) {
        state.error = error;
    },

    SET_BALANCES(state, balances) {
        state.balances = balances;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
