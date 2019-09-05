<template>
  <v-container style="padding: 0px; margin: 0px" id="mercenary container" fluid>
    <v-img :src="background">
      <v-layout align-center justify-center>
        <v-flex xs8 sm6>
          <v-card flat tile style="background-color: transparent;">
            <h1>Mercenary TD</h1>
            <p>Mercenary TD is a tower defence game.</p>
            <p>Build your mercenaries and create a legion to defend your King against multiple waves of minions.</p>
            <p>Build up your economy by building workers to gather ore and increase you gold income.</p>
            <p>
              Play up to four different teams or try out the special prophet team which contains of a different mix of mercenaries from the other teams.
              Test your skills on three different difficulty levels!
            </p>
            <p>Challenge your friends in multiplayer mode.</p>
            <p>Battle your way through waves and place yourself on the leaderboards!</p>
          </v-card>
        </v-flex>
      </v-layout>
    </v-img>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    background: require("@/assets/maadround.jpg")
  })
};
</script>

<style scoped>
</style>
