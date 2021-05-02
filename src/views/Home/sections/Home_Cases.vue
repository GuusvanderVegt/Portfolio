<template>
    <section class="home__cases cases" id="cases">
        <v-row>
            <v-col cols="12" class="d-flex justify-center">
                <h1 class="cases__header header--underlined">
                    CASES
                </h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="6">
                <v-card class="card case-card">
                    <v-img
                        src="https://picsum.photos/id/1011/1200/1800"
                        class="white--text text-center align-center"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="500px"
                    >
                        <v-card-text class="card__text pb-0">2020</v-card-text>

                        <v-card-title class="justify-center card__title"
                            >The ultimate Booking Engine</v-card-title
                        >
                    </v-img>
                </v-card>
            </v-col>

            <v-col cols="12" sm="6">
                <v-card class="card case-card">
                    <v-img
                        src="https://picsum.photos/id/1020/1200/1800"
                        class="white--text text-center align-center"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="500px"
                    >
                        <v-card-text class="card__text pb-0">2021</v-card-text>

                        <v-card-title class="justify-center card__title"
                            >The Component Booking Engine</v-card-title
                        >
                    </v-img>
                </v-card>
            </v-col>

            <v-col cols="12" sm="6">
                <v-card class="card case-card">
                    <v-img
                        src="https://picsum.photos/id/1013/1200/1800"
                        class="white--text text-center align-center"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="500px"
                    >
                        <v-card-text class="card__text pb-0">2019</v-card-text>

                        <v-card-title class="justify-center card__title"
                            >Oldskool By CUBE</v-card-title
                        >
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {};
</script>

<style></style>
