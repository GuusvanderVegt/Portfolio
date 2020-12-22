<template>
    <section class="home__information">
        <!-- Work row -->
        <v-row class="home__work work mb-6">
            <v-col cols=6>

                <v-card width="800px" class="work__card work-card card card--information elevation-20" >
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
                                    Are you looking for a fast and reliable website? Do
                                    you have designs or ideas, and you want to turn it
                                    into a working website?
                                </v-card-text>
                            </v-col>
                            <v-col cols="6" class="pa-0">
                                <!-- <v-responsive> -->
                                <v-img
                                    src="@/assets/images/pc-placeholder.jpg"
                                    height="100%"
                                    class="card__image"
                                ></v-img>
                                <!-- </v-responsive> -->
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>

            </v-col>

            <v-col cols=6>
                <h1>Skills</h1>
            </v-col>
        </v-row>

        <!-- Methods row -->
        <v-row class="home__methods methods">
            <v-card width="1200px" class="methods__card methods-card card card--information elevation-20" >
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
                                Are you looking for a fast and reliable website? Do
                                you have designs or ideas, and you want to turn it
                                into a working website?
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-row>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>