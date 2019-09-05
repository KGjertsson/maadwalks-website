
<template>
  <v-img :src="background" style="height: 100% ">
    <span>hej</span>
  </v-img>
</template>

<script>
export default {
  data: () => ({
    background: require("@/assets/maadround.jpg")
  })
};
</script>
