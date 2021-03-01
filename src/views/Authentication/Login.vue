<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-card>
                    <v-card-title>Login</v-card-title>
                    <v-card-actions>
                        <v-form style="width: 100%">
                            <v-text-field></v-text-field>
                        </v-form>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    created() {
        console.log(process.env);
    }
};
</script>

<style></style>
