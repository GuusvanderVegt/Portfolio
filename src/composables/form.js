export const useForm = () => {
    const fieldRules = [v => !!v || "Field is required"];
    const emailRules = [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
    ];

    return { fieldRules, emailRules };
};
