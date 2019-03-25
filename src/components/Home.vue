
<template>
  <v-container fluid style="padding: 0px">
    <v-img :src="background" style="height: 100vh"></v-img>

    <v-layout align-end justify-center row>
      <v-img :src="mercenary_image" style="height: 100vh">
        <v-btn
          large
          onclick="location.href='https://play.google.com/store/apps/details?id=com.MAADWALK.Mercenary';"
        >Play now</v-btn>
      </v-img>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    background: require("@/assets/16503_edited.png"),
    mercenary_image: require("@/assets/screen-4.jpg")
  })
};
</script>
