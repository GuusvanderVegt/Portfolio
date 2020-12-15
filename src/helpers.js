class helpers {
    apiUrl(endpoint, params){
        let addParams = true;
        if(!endpoint){
            console.error("No api endpoint specified!")
            return
        }

        //Make endpoint syntax mandatory (with or without slash)
        if(endpoint[0] !== "/"){
            endpoint = "/" + endpoint
            return
        }
        
        if(!params) {
            addParams = false
        } else {
           
            if(params && params[0] != "&"){
                params = "&" + params
                addParams = false
            }
        }
        
        return`${process.env.VUE_APP_API_URL}${endpoint}?token=${process.env.VUE_APP_API_KEY}${addParams ? params : ""}`

        // console.log(endpoint)
    }
}

export default new helpers();