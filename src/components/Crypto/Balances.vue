<template>
    <v-container>
        <v-card>
            <v-card-title>Balance</v-card-title>

            <v-card-text v-if="loading">Loading...</v-card-text>

            <v-data-table
                v-else
                :headers="tableHeaders"
                :items="balances"
                :items-per-page="5"
                class="elevation-1"
            ></v-data-table>
        </v-card>
    </v-container>
</template>

<script>
import { useCrypto } from "@/composables/crypto.js";
import { computed } from "@vue/composition-api";

export default {
    name: "Crypto_Balances",

    setup(props, { root }) {
        const { getBalance, loading } = useCrypto();
        getBalance();

        /**
         * Variables
         */
        const balances = computed(
            () => root.$store.getters["crypto/getBalances"]
        );

        const tableHeaders = computed(() => {
            return Object.keys(
                root.$store.getters["crypto/getBalances"][0]
            ).map(key => {
                return {
                    text: key.charAt(0).toUpperCase() + key.slice(1),
                    value: key
                };
            });
        });

        /**
         * Functions
         */

        return { getBalance, balances, tableHeaders, loading };
    }
};
</script>

<style lang="scss">
.v-data-table-header > tr {
    font-weight: bold;
}
</style>
