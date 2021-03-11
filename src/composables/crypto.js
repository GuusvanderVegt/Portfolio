import axios from "axios";
import helpers from "@/helpers";
import store from "@/store";
import { computed, ref } from "@vue/composition-api";

export const useCrypto = () => {
    let loading = ref(false);

    const accessToken = computed(() => store.getters["user/getAccessToken"]);

    const getBalance = (currency = null) => {
        let params = "";

        if (currency) {
            // TODO: IMPLEMENT
            // Sanity checks for provided currencies. And add currency filter to params
        }

        const config = {
            headers: { Authorization: `Bearer ${accessToken.value}` }
        };

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

    return {
        getBalance,
        loading
    };
};
