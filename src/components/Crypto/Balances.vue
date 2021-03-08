<template>
  <v-container>
      <v-card>
          <v-card-title>Balance</v-card-title>
      </v-card>
  </v-container>
</template>

<script>
import {useCrypto} from "@/composables/crypto.js"

export default {
    name: "Crypto_Balances",

    setup () {

        const { getBalance } = useCrypto();

        return { getBalance };

    }
}
</script>

<style>

</style>