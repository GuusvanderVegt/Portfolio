<template>
    <section class="home__intro home-intro mt-0">
        <div class="home-intro__overlay" style="z-index: 0" />

        <v-container>
            <div class="home-intro__content">
                <div class="home-intro__text">
                    <p class="home-intro__title">Hello there!</p>
                    <h1 class="home-intro__subtitle">
                        My name is Guus, what can I do for you?
                    </h1>
                </div>

                <v-divider color="white" class="my-4" width="55%" />

                <div class="home-intro__actions">
                    <button
                        class="btn btn__simple btn--no-spacing home-intro__button"
                        @click="scrollIntoView('cases')"
                    >
                        Cases
                    </button>
                    <button
                        class="btn btn__simple btn--no-spacing"
                        @click="scrollIntoView('contact')"
                    >
                        Make an appointment
                    </button>
                </div>
            </div>
        </v-container>
    </section>
</template>

<script>
export default {
    methods: {
        scrollIntoView(element) {
            if (this.$parent.$refs[element]) {
                this.$parent.$refs[element].$el.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }
};
</script>

<style></style>
