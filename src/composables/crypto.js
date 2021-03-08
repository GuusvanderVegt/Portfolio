// import axios from "axios";
// import helpers from "src/helpers";
import { computed } from "@vue/composition-api"

export const useCrypto = (props, { root }) => {

    const getAccessToken = computed(() => root.$store.getters.user.getAccessToken)
    
    const getBalance = (currency=null) => {
        console.log(getAccessToken, "accessToken");
        // let params = "";

        if(currency){
            // TODO: IMPLEMENT
            // Sanity checks for provided currencies. And add currency filter to params
        }

        // axios.get(helpers.personalApiUrl('/crypto/balance', params))


    }

    return {
        getBalance
    }

}