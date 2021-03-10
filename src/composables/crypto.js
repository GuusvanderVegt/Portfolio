import axios from "axios";
import helpers from "@/helpers";
import store from "@/store";
import { computed } from "@vue/composition-api";

export const useCrypto = () => {
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
        axios
            .get(helpers.personalApiUrl("/crypto/balance", params), config)
            .then(response => {
                console.log(response, "Balance response");
            })
            .catch(error => {
                console.log(error, "Balance error");
            });
    };

    return {
        getBalance
    };
};
