<template>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Maadwalk</span>
        <span class="font-weight-light">Games</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn flat large>Mercenary TD</v-btn>
        <v-btn flat large>Legionnaires TD</v-btn>
        <v-btn flat large>News</v-btn>
        <v-btn flat large>Team</v-btn>
        <v-btn flat large>About</v-btn>
      </div>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'maadheader',
    props: {
      msg: String
    }
}
</script>

<style>

</style>
