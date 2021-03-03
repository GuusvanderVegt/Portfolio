import { ref, reactive } from "@vue/composition-api";
// import router from "@/router";
// import store from "@/store";

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
        console.log("Email: ", email, "Password: ", password);
    };

    return {
        email,
        password,
        errorMessage,
        rules,
        login
    };
};
