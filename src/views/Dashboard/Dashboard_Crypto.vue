<template>
    <v-container>
        <Balances/>
    </v-container>
</template>

<script>

export default {
    name: "Crypto",

    components: {
        Balances: () => import("@/components/Crypto/Balances.vue")
    }

};
</script>

<style></style>
