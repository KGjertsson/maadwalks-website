<template>
  <v-footer height="auto">
    <v-layout column>
      <!-- <v-layout align-center justify-center row fill-height> -->
        <v-card flat class="lighten-1">
          <v-btn v-on:click="$router.push('contact')" flat large>Contact</v-btn>
          <v-btn v-on:click="$router.push('data-policy')" flat large>Data Policy</v-btn>
          <v-divider></v-divider>
          <ul>
            <li>We are mad and we make games.</li>
            <li
              href="https://www.freepik.com/free-photos-vectors/background"
            >Background vector created by rawpixel.com - www.freepik.com</li>
            <li>Maadwalk Games AB</li>
          </ul>
        </v-card>
    </v-layout>
  </v-footer>
</template>