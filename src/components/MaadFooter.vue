<template>
  <v-footer dark height="auto">
    <v-layout column>
      <v-card flat tile class="lighten-1 text-xs-center">
        <v-btn v-on:click="$router.push('contact')" flat large>Contact</v-btn>
        <v-btn v-on:click="$router.push('data-policy')" flat large>Data Policy</v-btn>

        <v-divider></v-divider>

        <v-card-text>We are mad and we make games.</v-card-text>
        <v-card-text>
          <a
            href="https://www.freepik.com/free-photos-vectors/background"
          >Background vector created by rawpixel.com - www.freepik.com</a>
        </v-card-text>

        <v-card-text class="white--text">
          <strong>Maadwalk Games AB</strong>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    //
  })
};
</script>