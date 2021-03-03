<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-card>
                    <v-card-title>Login</v-card-title>
                    <v-card-actions class="pa-4">
                        <v-form style="width: 100%" ref="loginForm">
                            <v-text-field
                                label="Email"
                                v-model="email"
                                :rules="rules.email"
                            ></v-text-field>

                            <v-text-field
                                label="Password"
                                v-model="password"
                                :rules="rules.password"
                            ></v-text-field>

                            <v-btn color="primary" @click="validate"
                                >Login</v-btn
                            >
                        </v-form>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { useAuthentication } from "@/composables/authentication.js";

export default {
    name: "Login",

    setup(props, context) {
        const {
            email,
            password,
            errorMessage,
            rules,
            login
        } = useAuthentication();

        const validate = () => {
            if (context.refs.loginForm.validate()) {
                login();
            }
        };

        return { email, password, errorMessage, rules, validate };
    }
};
</script>

<style></style>
