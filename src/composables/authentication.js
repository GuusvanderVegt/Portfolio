import axios from "axios";
import { ref, reactive } from "@vue/composition-api";
import helpers from "@/helpers.js";
import router from "@/router";
import store from "@/store";

export const useAuthentication = () => {
    let email = ref("");
    let password = ref("");
    let errorMessage = ref("");

    let rules = reactive({
        email: [
            v => !!v || "E-mail is required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        password: [v => !!v || "Password is required"]
    });

    const login = () => {
        axios
            .post(helpers.personalApiUrl("/auth/login"), {
                email: email.value,
                password: password.value
            })
            .then(response => {
                store.commit("user/SET_USER", response.data.user);
                store.commit(
                    "user/SET_ACCESS_TOKEN",
                    response.data.access_token
                );
                router.push({ name: "Dashboard_Home" });
            })
            .catch(error => {
                errorMessage.value = error.message;
            });
    };

    return {
        email,
        password,
        errorMessage,
        rules,
        login
    };
};
