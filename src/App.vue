<template>
  <v-app dark>
    <MaadHeader/>
    <v-content>
      <v-container fluid style="padding: 0px">
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>

    <MaadFooter/>
  </v-app>
</template>

<script>
import MaadHeader from './components/MaadHeader'
import MaadFooter from './components/MaadFooter'

export default {
  name: 'App',
  components: {
    MaadHeader,
    MaadFooter,
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
