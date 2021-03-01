export const useAuthentication = () => {

    let rules = reactive({
        email: [
          v => !!v || "E-mail is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        password: [v => !!v || "Password is required"]
    });

    return {
        rules
    }
}