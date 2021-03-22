<template>
    <v-container>
        <Trades />
    </v-container>
</template>

<script>
export default {
    name: "Crypto",

    components: {
        Trades: () => import("@/components/Crypto/Trades.vue")
    }
};
</script>

<style></style>
