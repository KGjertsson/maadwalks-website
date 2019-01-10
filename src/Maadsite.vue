<template>
  <v-app dark>
    <maadheader msg="This is where the header should be"/>
    <maadcarousel msg="There should be a carousel here if I'm not mistaken..."/>
    <maadfooter msg="Getting cold feet?"/>
  </v-app>
</template>

<script>
import maadheader from './components/maadheader'
import maadcarousel from './components/maadcarousel'
import maadfooter from './components/maadfooter'

export default {
  name: 'App',
  components: {
    maadheader,
    maadcarousel,
    maadfooter
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
