<template>
    <section class="home-hero mt-0">
        <div class="home-hero__left">
            <div class="home-hero__content">
                <h3 class="home-hero__subheader">Hello there</h3>
                <h1 class="home-hero__header">
                    My name is Guus,<br />
                    what can I do for you?
                </h1>
                <div class="home-hero__buttons">
                    <button
                        class="btn btn__simple btn--no-spacing home-hero__button"
                        @click="scrollIntoView('cases')"
                    >
                        CASES
                    </button>
                    <button
                        class="btn btn__simple btn--no-spacing home-hero__button"
                        @click="scrollIntoView('contact')"
                    >
                        HIRE ME
                    </button>
                </div>
            </div>
            <div class="home-hero__arrow">
                <v-icon x-large>mdi-arrow-down</v-icon>
            </div>
        </div>

        <!-- Shapes -->
        <div class="home-hero__right">
            <div class="home-hero__square-wrapper">
                <div class="home-hero__square-row">
                    <div class="home-hero__square square--light">
                        <div
                            class="sphere sphere--dark sphere--fade-left"
                        ></div>
                    </div>
                </div>

                <div class="home-hero__square-row">
                    <div class="home-hero__square square--light">
                        <div class="sphere sphere--dark sphere--fade-top"></div>
                    </div>
                    <div class="home-hero__square square--dark"></div>
                    <div class="home-hero__square square--light">
                        <div
                            class="sphere sphere--dark sphere--fade-bottom"
                        ></div>
                    </div>
                </div>

                <div class="home-hero__square-row">
                    <div class="home-hero__square square--light">
                        <div
                            class="sphere sphere--dark sphere--fade-right"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Home-Hero",

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
