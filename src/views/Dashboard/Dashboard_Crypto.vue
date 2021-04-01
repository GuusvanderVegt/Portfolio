<template>
    <v-container>
        <v-row class="ml-1">
            <h1>Crypto Overview</h1>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <Portfolio />

        <v-divider class="mb-4"></v-divider>

        <v-row>
            <Balance />
            <Trades />
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Crypto",

    components: {
        Portfolio: () => import("@/components/Crypto/Portfolio.vue"),
        Trades: () => import("@/components/Crypto/Trades.vue"),
        Balance: () => import("@/components/Crypto/Balances.vue")
    }
};
</script>

<style></style>
