const state = {
    errors: null,
    balances: null,
    trades: null
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
    },

    getTrades(state) {
        return state.trades.map(trade => {
            const timestamp = new Date(trade.timestamp);
            trade.timestamp = timestamp.toUTCString();
            return trade;
        });
    }
};

const actions = {};

const mutations = {
    SET_ERROR(state, error) {
        state.error = error;
    },

    SET_BALANCES(state, balances) {
        state.balances = balances;
    },

    SET_TRADES(state, trades) {
        state.trades = trades;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
