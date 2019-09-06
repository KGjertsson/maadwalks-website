<template>
  <v-app dark>
    <MaadHeader />
    <v-content>
      <v-container
        class="bgimg"
        fluid
        fill-height
        style="padding: 0px; margin: 0px; "
        id="main container"
      >
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MaadHeader from "./components/MaadHeader";

export default {
  name: "App",
  components: {
    MaadHeader
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
html {
  overflow-y: auto;
}
.bgimg {
  background-image: url("assets/maadround.jpg");
}
</style>
