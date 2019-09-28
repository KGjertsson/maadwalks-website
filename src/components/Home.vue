<template>
  <v-card class="mx-auto">
    <v-container class="pa-2" fluid>
      <v-card color="#385F73" dark>
        <v-img class="white--text image-card" :src="maadjump_img">
          <v-card-text class="white--text">
            <div class="headline mb-2">Mad Escape</div>
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
        <v-img class="white--text image-card" :src="legions_img">
          <v-card-text class="white--text">
            <div class="headline mb-2">Legions TD</div>
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

<style scoped>
.image-card {
  width: 400px;
}

@media only screen and (max-width: 500px) {
  .image-card {
    width: 300px;
  }
}
</style>