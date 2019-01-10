<template>
  <v-app dark>
    <maadheader/>
    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>

    <maadfooter/>
  </v-app>
</template>

<script>
import maadheader from './components/maadheader'
import maadfooter from './components/maadfooter'

export default {
  name: 'App',
  components: {
    maadheader,
    maadfooter,
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
