<template>
    <main class="home">
        <HomeHeader />

        <v-container>
            <HomeKeyFeatures />
            <HomeCases />
            <HomeContact />
        </v-container>
    </main>
</template>

<script>
import axios from "axios";
import helpers from "@/helpers";
export default {
    name: "Home",

    data() {
        return {
            singletonHome: null,
            loading: false
        };
    },

    components: {
        HomeHeader: () => import("@/views/Home/sections/Home_Intro.vue"),
        HomeKeyFeatures: () =>
            import("@/views/Home/sections/Home_KeyFeatures.vue"),
        HomeCases: () => import("./sections/Home_Cases"),
        HomeContact: () => import("./sections/Home_Contact")
    },

    created() {
        this.loading = true;
        axios.get(helpers.apiUrl("/singletons/get/PageHome")).then(response => {
            console.log(response.data);
            this.singleton = response.data;
            this.loading = false;
        });
    }
};
</script>
