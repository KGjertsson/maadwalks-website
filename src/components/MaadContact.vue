<template>
  <v-img :src="background" style="height: 100% ">
    <v-container grid-list-xl fill-height>
      <v-layout align-center justify-center row fill-height style="height: 100%">
        <v-flex xs8 sm6>
          <v-card flat tile style="background-color: transparent;">
            <h1 style="margin-bottom: 20px">Contact Maadwalk Games:</h1>
            <p>
              Email us at
              <a
                style="cursor: pointer;"
                onclick="window.open('mailto:konrad.gjertsson@protonmail.com')"
              >maadwalk@gmail.com</a>
            </p>
            <p>
              Reach out at our subreddit:
              <a href="http://reddit.com/r/maadwalk">r/MaadWalk</a>
            </p>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>

<script>
export default {
  data: () => ({
    background: require("@/assets/maadround.jpg")
  })
};
</script>