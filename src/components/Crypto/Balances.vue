<template>
    <v-container>
        <v-card>
            <v-card-title>Balance</v-card-title>
            <v-card-text v-if="loading">Loading...</v-card-text>
            <v-card-text v-else>
                <p v-for="(balance, index) in balances" :key="index">
                    {{ balance.symbol }} - Available: {{ balance.available }}
                </p>
            </v-card-text>
            <!-- <v-card-text v-for="(balance, index) in balances" :key="index"
                >{{ balance.symbol }} - Available:
                {{ balance.available }}</v-card-text
            > -->
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

        const balances = computed(
            () => root.$store.getters["crypto/getBalances"]
        );

        return { getBalance, balances, loading };
    }
};
</script>

<style></style>
