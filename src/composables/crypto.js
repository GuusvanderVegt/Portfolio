import axios from "axios";
import helpers from "@/helpers";
import store from "@/store";
import { computed, ref } from "@vue/composition-api";

export const useCrypto = () => {
    //Variables
    let loading = ref(false);
    const accessToken = computed(() => store.getters["user/getAccessToken"]);

    //Static variables
    let config = {
        headers: { Authorization: `Bearer ${accessToken.value}` }
    };

    const getBalance = (currency = null) => {
        let params = "";

        if (currency) {
            // TODO: IMPLEMENT
            // Sanity checks for provided currencies. And add currency filter to params
        }

        loading.value = true;
        axios
            .get(helpers.personalApiUrl("/crypto/balance", params), config)
            .then(response => {
                console.log(response, "Balance response");
                store.commit("crypto/SET_BALANCES", response.data);
            })
            .catch(error => {
                console.log(error, "Balance error");
            })
            .finally(() => {
                loading.value = false;
            });
    };

    const getTrades = (currency = "ADA-EUR") => {
        let params = "";
        if (currency) {
            //Some more sanity checks on given currencies
            params = params + `&currency=${currency}`;
        }

        loading.value = true;
        axios
            .get(helpers.personalApiUrl("/crypto/trades", params), config)
            .then(response => {
                store.commit("crypto/SET_TRADES", response.data);
                console.log(response.data, "Trades");
            })
            .finally(() => {
                loading.value = false;
            });
    };

    return {
        getBalance,
        getTrades,
        loading
    };
};
