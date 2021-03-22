<template>
    <v-container>
        <v-card>
            <v-card-title>
                Trades
                <v-spacer></v-spacer>
                <v-select :items="tradeFilters" v-model="filter"></v-select>
            </v-card-title>

            <v-card-text v-if="loading">Loading...</v-card-text>

            <v-data-table
                v-else
                :headers="tableHeaders"
                :items="trades"
                :items-per-page="10"
                class="elevation-1"
            ></v-data-table>
        </v-card>
    </v-container>
</template>

<script>
import { useCrypto } from "@/composables/crypto.js";
import { computed, ref, watch } from "@vue/composition-api";

export default {
    setup(props, { root }) {
        const { getTrades, loading } = useCrypto();
        getTrades();

        //Variables
        let filter = ref("ADA-EUR");
        const tradeFilters = ["ADA-EUR", "BTC-EUR", "ETH-EUR", "CHZ-EUR"];
        const trades = computed(() => root.$store.getters["crypto/getTrades"]);

        //Watch
        watch(filter, (currentValue, oldValue) => {
            if (currentValue != oldValue) {
                getTrades(currentValue);
            }
        });

        //Methods
        const tableHeaders = computed(() => {
            const headers = Object.keys(
                root.$store.getters["crypto/getTrades"][0]
            );

            return headers.map(header => {
                return {
                    text: header.charAt(0).toUpperCase() + header.slice(1),
                    value: header,
                    width: "150px"
                };
            });
        });

        return { tableHeaders, tradeFilters, filter, loading, trades };
    }
};
</script>

<style></style>
