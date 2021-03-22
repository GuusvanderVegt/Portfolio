class helpers {
    apiUrl(endpoint, params) {
        let addParams = true;
        if (!endpoint) {
            console.error("No api endpoint specified!");
            return;
        }

        //Make endpoint syntax mandatory (with or without slash)
        if (endpoint[0] !== "/") {
            endpoint = "/" + endpoint;
            return;
        }

        if (!params) {
            addParams = false;
        } else {
            if (params && params[0] != "&") {
                params = "&" + params;
                addParams = false;
            }
        }

        return `${process.env.VUE_APP_API_URL}${endpoint}?token=${
            process.env.VUE_APP_API_KEY
        }${addParams ? params : ""}`;

        // console.log(endpoint)
    }

    personalApiUrl(endpoint, params = "") {
        if (!endpoint) {
            throw new Error("No api endpoint specified!");
        }

        if (endpoint[0] !== "/") {
            endpoint = "/" + endpoint;
        }

        if (params[0] == "&") {
            params = params.substring(1, params.length);
        }

        console.log(params);

        return `${process.env.VUE_APP_PERSONAL_API_URL}${endpoint}?${params}`;
    }
}

export default new helpers();
