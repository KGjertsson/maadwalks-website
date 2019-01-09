<template>
  <v-app dark>
    <maadheader msg="This is where the header should be"/>
    <maadcarousel msg="There should be a carousel here if I'm not mistaken..."/>

  </v-app>
</template>

<script>
import maadheader from './components/maadheader'
import maadcarousel from './components/maadcarousel'

export default {
  name: 'App',
  components: {
    maadheader,
    maadcarousel
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
html { overflow-y: auto }
</style>
