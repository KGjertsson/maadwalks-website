<template>
  <v-card class="mx-auto">
    <v-container class="pa-2" fluid>
      <v-card color="#385F73" dark>
        <v-img class="white--text" :src="maadjump_img">
          <v-card-text class="white--text">
            <div class="headline mb-2">Maadjump</div>You better be good at jumping or be patient you nerdy fuck.
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              onclick="location.href='https://play.google.com/store/apps/details?id=com.maadwalk.maadjump'"
            >Play Now</v-btn>
          </v-card-actions>
        </v-img>
      </v-card>
    </v-container>
    <v-container class="pa-2" fluid>
      <v-card color="#385F73" dark>
        <v-img class="white--text" :src="legions_img">
          <v-card-text class="white--text">
            <div class="headline mb-2">Legions TD</div>Wc3 best game eu.
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              onclick="location.href='https://play.google.com/store/apps/details?id=com.MAADWALK.Mercenary'"
            >Play Now</v-btn>
          </v-card-actions>
        </v-img>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    maadjump_img: require("@/assets/maadjump.webp"),
    legions_img: require("@/assets/legions.webp")
  })
};
</script>