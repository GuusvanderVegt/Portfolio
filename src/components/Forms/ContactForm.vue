<template>
    <v-form
        class="form contact-form mt-0"
        ref="contactForm"
        lazy-validation
        @submit.prevent="submitForm"
    >
        <!-- First and last name -->
        <v-row>
            <v-col cols="12" sm="6">
                <div class="form__field">
                    <span class="form__field-label">YOUR NAME</span>
                    <v-text-field
                        :rules="fieldRules"
                        required
                        class="pt-0"
                    ></v-text-field>
                </div>
            </v-col>
            <v-col cols="12" sm="6">
                <div class="form__field">
                    <span class="form__field-label">YOUR EMAIL</span>
                    <v-text-field
                        :rules="emailRules"
                        required
                        class="pt-0"
                    ></v-text-field>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <div class="form__field">
                    <span class="form__field-label"
                        >YOUR QUESTION OR MESSAGE</span
                    >
                </div>
                <v-textarea
                    :rules="fieldRules"
                    rows="4"
                    class="pt-0"
                ></v-textarea>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="3">
                <div class="form__field">
                    <button class="btn btn--outlined">
                        SEND NOW
                    </button>
                </div>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
import { useForm } from "@/composables/form.js";

export default {
    setup(props, context) {
        let valid = false;

        const { fieldRules, emailRules } = useForm();

        const submitForm = () => {
            if (context.refs.contactForm.validate()) {
                console.log("Form valid");
            }
        };

        return { valid, fieldRules, emailRules, submitForm };
    }
};
</script>

<style></style>
