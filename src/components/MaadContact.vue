<template>
  <v-layout align-center justify-center>
    <v-flex xs6 md6 lg6 xl6>
      <v-card flat style="background-color: transparent;">
        <v-card-title primary-title class="justify-center">
          <div>
            <h1>Contact the Team</h1>
            <p style="margin-bottom: 00px">
              Email us at
              <a
                style="cursor: pointer;"
                onclick="window.open('mailto:Maadwalk@gmail.com')"
              >maadwalk@gmail.com</a>
            </p>
            <p>
              Reach out at our subreddit:
              <a href="http://reddit.com/r/maadwalk">r/MaadWalk</a>
            </p>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    background: require("@/assets/maadround.jpg")
  })
};
</script>