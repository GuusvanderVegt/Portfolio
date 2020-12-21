<template>
    <main class="home">
        <section class="home__intro intro">
            <div class="intro__overlay" style="z-index: 0" />

            <v-container>
                <div class="intro__content">
                    <div class="intro__text">
                        <p class="intro__title">Hello there!</p>
                        <h1 class="intro__subtitle">
                            My name is Guus, what can i do for you?
                        </h1>
                    </div>

                    <v-divider color="white" class="my-4" width="55%" />

                    <div class="intro__actions">
                        <button class="btn btn__simple intro__button">
                            View portfolio
                        </button>
                        <button class="btn btn__simple">
                            Make an appointment
                        </button>
                    </div>
                </div>
            </v-container>
        </section>

        <v-container>
            <section class="home__work work">
                <v-card
                    width="800px"
                    style="transform: translateY(-50px)"
                    class="work__card work-card card card--information elevation-20"
                >
                    <v-container class="pa-0">
                        <v-row>
                            <v-col cols="6" class="pa-6">
                                <v-card-subtitle class="pb-0 card__subtitle"
                                    >What do i do?</v-card-subtitle
                                >
                                <v-card-title class="card__title"
                                    >I make websites for <br />
                                    living!</v-card-title
                                >
                                <v-card-text color="black" class="card__text">
                                    Are you looking for a fast and reliable
                                    website? Do you have designs or ideas, and
                                    you want to turn it into a working website?
                                </v-card-text>
                            </v-col>
                            <v-col cols="6" class="pa-0">
                                <!-- <v-responsive> -->
                                <v-img
                                    src="@/assets/images/pc-placeholder.jpg"
                                    height="100%"
                                ></v-img>
                                <!-- </v-responsive> -->
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </section>

            <section class="home__methods methods">
                <v-card
                    width="1200px"
                    class="methods__card methods-card card card--information elevation-20"
                >
                    <v-container class="pa-0">
                        <v-row>
                            <!-- Image column -->
                            <v-col cols="6" class="pa-0">
                                <v-img
                                    src="@/assets/images/coding.jpg"
                                    height="300px"
                                    class="card__image"
                                ></v-img>
                            </v-col>

                            <!-- Content column -->
                            <v-col cols="6" class="pa-6">
                                <v-card-subtitle class="pb-0 card__subtitle"
                                    >Methods</v-card-subtitle
                                >
                                <v-card-title class="card__title"
                                    >My focus lies on perfection</v-card-title
                                >
                                <v-card-text color="black" class="card__text">
                                    Are you looking for a fast and reliable
                                    website? Do you have designs or ideas, and
                                    you want to turn it into a working website?
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </section>
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
