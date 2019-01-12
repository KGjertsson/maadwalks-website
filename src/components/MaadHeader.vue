<template>
    <v-toolbar app m>

      <v-toolbar-title style="cursor: pointer" class="headline text-uppercase" v-on:click="$router.push('/')">
        <span >Maadwalk</span>
        <span class="font-weight-light">Games</span>
      </v-toolbar-title>
      <v-img style="cursor: pointer" v-on:click="$router.push('/')" src="https://lh3.googleusercontent.com/Zxqq87uliNDCcPAgaH8j8deJ8EORiICC482_cP6pJJSi5x6RIoZxE90QCqdFmpwzMfu0" contain max-height=80 max-width=200></v-img>
      
      <v-spacer></v-spacer>
      <div>
        <v-btn v-on:click="$router.push('mercenary-td')" flat large>Mercenary TD</v-btn>
        <v-btn v-on:click="$router.push('about')" flat large>About</v-btn>
        <v-btn v-on:click="$router.push('team')" flat large>Team</v-btn>
        <v-btn v-on:click="$router.push('contact')" flat large>Contact</v-btn>
      </div>
      
  </v-toolbar>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      msg: String
    }
}
</script>

<style>

</style>
