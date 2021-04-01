<template>
    <v-row class="mb-4">
        <v-col cols="4">
            <v-card height="100%" class="justify-center pa-4 rounded-lg">
                <v-card-title>Portfolio</v-card-title>
                <v-card-text>
                    <h4>Investment:</h4>
                    <h1
                        class="mt-2 "
                        :class="[
                            { 'white--text': $vuetify.theme.dark },
                            { 'black--text': !$vuetify.theme.dark }
                        ]"
                    >
                        $700
                    </h1>
                </v-card-text>

                <v-card-text>
                    <h4>Current Value:</h4>
                    <h1
                        class="mt-2 "
                        :class="[
                            { 'white--text': $vuetify.theme.dark },
                            { 'black--text': !$vuetify.theme.dark }
                        ]"
                    >
                        $950
                    </h1>
                </v-card-text>

                <v-card-text>
                    <h4>Profit/Loss:</h4>
                    <h1 class="mt-2 green--text">+20%</h1>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="success" class="rounded-xl py-6"
                        >Tegoed storten</v-btn
                    >
                    <v-spacer></v-spacer>
                    <v-btn class="rounded-xl py-6">Tegoed opnemen</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="5">
            <apexchart
                height="400"
                width="95%"
                type="donut"
                :options="chartOptions"
                :series="series"
            ></apexchart>
        </v-col>
    </v-row>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
    components: {
        apexchart: VueApexCharts
    },

    data: function() {
        return {
            series: [12, 55, 41, 17],
            chartOptions: {
                chart: {
                    type: "donut"
                },
                // responsive: [
                //     {
                //         breakpoint: 480,
                //         options: {
                //             chart: {
                //                 width: "100%"
                //             },
                //             legend: {
                //                 position: "bottom"
                //             }
                //         }
                //     }
                // ],

                labels: ["Bitcoin", "Cardano", "Etherium", "USDT"]
            }
        };
    }
};
</script>

<style></style>
