<template>
    <nav class="navbar">
        <div class="navbar__left">
            <h1 class="navbar__header">Guus van der Vegt</h1>
            <ul class="navbar__links">
                <li class="navbar__link" @click="navigate($event, 'cases')">
                    <a>Cases</a>
                </li>
                <li class="navbar__link" @click="navigate($event, 'aboutme')">
                    <a>About Me</a>
                </li>
                <li class="navbar__link" @click="navigate($event, 'contact')">
                    <a>Hire Me</a>
                </li>
            </ul>
        </div>

        <div class="navbar__right">
            <v-icon dark large>mdi-instagram</v-icon>
            <v-icon dark large>mdi-linkedin</v-icon>
            <v-icon dark large>mdi-theme-light-dark</v-icon>
        </div>
    </nav>
</template>

<script>
export default {
    name: "portfolio-navbar",

    methods: {
        navigate(event, location) {
            //Remove navbar__link of all links
            document.getElementsByClassName("navbar__link").forEach(element => {
                element.classList.remove("active");
            });

            //Add class to correct link
            if (event.target.tagName.toLowerCase() === "a") {
                event.target.parentNode.classList.add("active");
            } else {
                event.target.classList.add("active");
            }

            if (this.$parent.$refs[location]) {
                this.$parent.$refs[location].$el.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }
};
</script>

<style></style>
