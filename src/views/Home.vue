<template>
    <main class="home">
        <section class="home__intro intro">
            <div class="intro__overlay" style="z-index: 0"/>
            
            <div class="intro__content">
                <div class="intro__text">
                    <p class="intro__title">Hello there!</p>
                    <h1 class="intro__subtitle">My name is Guus, what can i do for you?</h1>
                </div>
                <div class="intro__actions">
                    <button class="btn btn__simple intro__button">View portfolio</button>
                    <button class="btn btn__simple">Make an appointment</button>
                </div>
            </div>
        </section>

        <section class="home__work work">
            <v-container>
                <v-card width="800px" style="transform: translateY(-50px)" class="work__card">
                    <v-card-subtitle class="pb-0">What do i do?</v-card-subtitle>
                    <v-card-title>I make websites for living!</v-card-title>
                    <v-card-text color="black">
                        Are you looking for a fast and reliable website? 
                        Do you have designs or ideas, and you want to turn it into a working website? 
                    </v-card-text>
                </v-card>
            </v-container>
        </section>
    </main>
</template>

<script>
import axios from "axios";
import helpers from "@/helpers"
export default {
    name: "Home",

    data() {
        return {
            singletonHome: null,
            loading: false,
        };
    },

    created() {
        this.loading = true;
        axios.get(helpers.apiUrl("/singletons/get/PageHome"))
            .then((response) => {
                console.log(response.data);
                this.singleton = response.data;
                this.loading = false;
            });
    },
};
</script>
