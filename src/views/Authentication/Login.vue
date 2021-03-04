<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="6">
                <v-card class="pa-4">
                    <v-card-title>Login</v-card-title>
                    <v-card-actions class="pa-4 d-flex flex-column">
                        <v-form style="width: 100%" ref="loginForm" class="mb-4">
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

                            <v-btn color="primary" @click="validate" width="100%"
                                >Login</v-btn
                            >
                        </v-form>
                        
                        <v-alert type="error" v-if="errorMessage" width="100%">{{errorMessage}}</v-alert>
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
                console.log(errorMessage);
            }
        };

        

        return { email, password, errorMessage, rules, validate };
    }
};
</script>

<style></style>
