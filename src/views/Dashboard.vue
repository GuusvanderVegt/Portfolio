<template>
    <v-main>
        <Navigation />

        <v-container>
            <router-view />
        </v-container>
    </v-main>
</template>

<script>
export default {
    components: {
        Navigation: () => import("@/components/Navigation.vue")
    }
};
</script>

<style></style>
