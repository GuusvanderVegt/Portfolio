<template>
    <section class="home__contact contact">
        <v-row>
            <v-col
                cols="12"
                class="d-flex justify-center flex-column align-center"
            >
                <h1 class="contact__header header__underlined">
                    CONTACT ME
                </h1>

                <h2 class="contact__text">
                    Did i wake your interest, or do you have a question?
                </h2>
            </v-col>
        </v-row>

        <!-- Form -->
        <ContactForm />
    </section>
</template>

<script>
export default {
    name: "Home-Contact",

    components: {
        ContactForm: () => import("@/components/Forms/ContactForm.vue")
    }
};
</script>

<style></style>
