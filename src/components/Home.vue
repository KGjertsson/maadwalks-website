
<template>
  <v-container fluid style="padding: 0px">
    <v-img :src="logo" style="height: 100vh"></v-img>

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
    logo: require("@/assets/2996.jpg"),
    mercenary_image: require("@/assets/screen-4.jpg")
  })
};
</script>
