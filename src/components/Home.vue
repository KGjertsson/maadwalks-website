
<template>
  <v-img :src="background" style="height: 100% ">
    <iframe width="1920" height="1080" src="https://www.youtube.com/embed/Pmejqj3SiL8"></iframe>
  </v-img>
</template>

<script>
export default {
  data: () => ({
    background: require("@/assets/16503_edited.png")
  })
};
</script>
