<template>
    <main class="home">
        <HomeHeader />

        <v-container>
           <HomeInformation/>
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
        HomeInformation: () => import("@/views/Home/sections/Home_Information.vue")
        // HomeWork: () => import("@/views/Home/sections/Home_Work.vue"),
        // HomeMethods: () => import("@/views/Home/sections/Home_Methods.vue")
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
