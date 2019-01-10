<template>
    <v-toolbar app m>

      <router-link class.disabled=true :to="{name: 'home'}">
        <v-toolbar-title class="headline text-uppercase">
          <span>Maadwalk</span>
          <span class="font-weight-light">Games</span>
        </v-toolbar-title>
      </router-link>
      <v-img src="https://lh3.googleusercontent.com/Zxqq87uliNDCcPAgaH8j8deJ8EORiICC482_cP6pJJSi5x6RIoZxE90QCqdFmpwzMfu0" contain max-height=80 max-width=200></v-img>
      
      <v-spacer></v-spacer>
      <div>
        <v-btn flat large>Mercenary TD</v-btn>

        <router-link :to="{name: 'about'}">
          <v-btn flat large>About</v-btn>
        </router-link>
        
        <v-btn flat large>Team</v-btn>
        <v-btn flat large>Contact</v-btn>
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
