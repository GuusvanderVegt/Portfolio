<template>
    <section class="home__key-features key-features">
        <v-row>
            <v-col cols="12" class="d-flex justify-center">
                <h1 class="key-features__header header__underlined">
                    KEY FEATURES
                </h1>
            </v-col>
        </v-row>

        <v-row class="key-features__wrapper">
            <v-col cols="12" sm="6" md="3">
                <div class="key-feature">
                    <v-icon large class="key-feature__icon">
                        mdi-speedometer
                    </v-icon>

                    <v-divider color="white" class="my-4" width="55%" />

                    <h1 class="key-feature__header">Speed</h1>

                    <p class="key-feature__text">
                        Modern technologies result in a fast experience. My
                        sites are build with it!
                    </p>
                </div>
            </v-col>

            <v-col cols="12" sm="6" md="3">
                <div class="key-feature">
                    <v-icon large class="key-feature__icon">
                        mdi-play-protected-content
                    </v-icon>

                    <v-divider color="white" class="my-4" width="55%" />

                    <h1 class="key-feature__header">CMS</h1>

                    <p class="key-feature__text">
                        Easy manageable content, i make use of a CMS!
                    </p>
                </div>
            </v-col>

            <v-col cols="12" sm="6" md="3">
                <div class="key-feature">
                    <v-icon large class="key-feature__icon">
                        mdi-responsive
                    </v-icon>

                    <v-divider color="white" class="my-4" width="55%" />

                    <h1 class="key-feature__header">Responsive</h1>
                    <p class="key-feature__text">
                        A design which looks amazing on every device you'll show
                        it on.
                    </p>
                </div>
            </v-col>

            <v-col cols="12" sm="6" md="3">
                <div class="key-feature">
                    <v-icon large class="key-feature__icon">
                        mdi-infinity
                    </v-icon>

                    <v-divider color="white" class="my-4" width="55%" />

                    <h1 class="key-feature__header">Dynamic</h1>

                    <p class="key-feature__text">
                        A website which takes a different form depending on the
                        situation? Sounds cool right?
                    </p>
                </div>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {};
</script>

<style></style>
