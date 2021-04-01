<template>
    <v-navigation-drawer
        class="elevation-10"
        floating
        permanent
        app
        :style="{
            'background-color': $vuetify.theme.dark
                ? $vuetify.theme.themes.dark.background
                : ''
        }"
    >
        <v-row class="flex-column pb-4" style="height: 100%">
            <v-list dense nav class="py-0">
                <v-list-item two-line :to="{ name: 'UserShow' }">
                    <v-list-item-avatar>
                        <!-- <img :src="currentUser.profileImage" /> -->
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{ userName }}</v-list-item-title>
                        <v-list-item-subtitle
                            >View Profile</v-list-item-subtitle
                        >
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item link :to="{ name: 'Dashboard_Home' }">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <!-- Projects -->
                <v-list-item link :to="{ name: 'Projects' }">
                    <v-list-item-icon>
                        <v-icon>mdi-folder</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Projects</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <!-- Crypto -->
                <v-list-item link :to="{ name: 'Dashboard_Crypto' }">
                    <v-list-item-icon>
                        <v-icon>mdi-bitcoin</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Crypto</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-spacer></v-spacer>

            <v-list nav dense>
                <v-list-item @click="toggleDarkMode()">
                    <v-list-item-icon>
                        <v-icon>mdi-brightness-4</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Light mode</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item @click="logout()">
                    <v-list-item-icon>
                        <v-icon>mdi-power</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-row>
    </v-navigation-drawer>
</template>

<script>
import { ref } from "@vue/composition-api";

export default {
    setup(props, { root }) {
        const items = [
            { title: "Dashboard", icon: "mdi-view-dashboard" },
            { title: "Photos", icon: "mdi-image" },
            { title: "About", icon: "mdi-help-box" }
        ];

        const userName = ref(root.$store.getters["user/getUserName"]);

        return { items, userName };
    }
};
</script>

<style></style>
