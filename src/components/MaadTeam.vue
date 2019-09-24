<template>
  <v-container>
    <v-layout align-center justify-center row fill-height style="height: 100%">
      <v-flex xs10 sm10 md10 lg8 xl8>
        <h1>Maadwalk Games</h1>
        <span>
          Maadwalk Games consists of a small and dedicated team brought together by a shared love for Warcraft III and
          Legion TD. Our flagship product, Mercenary TD, is a remake of the original WC3 game for android, which maintains
          the true spirit of Legion TD yet filled with exciting new content.
        </span>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center row wrap>
      <v-flex v-for="card in cardsRowOne" :key="card.title" shrink style="padding: 20px">
        <v-card width="230px">
          <v-container fill-height pa-2>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text" v-text="card.name"></span>
              </v-flex>
            </v-layout>
          </v-container>

          <v-img :src="card.src" height="200px"></v-img>
          <v-card-actions>
            <v-flex xs12 align-end flexbox>
              <span class="headline white--text" v-text="card.title"></span>
            </v-flex>
            <v-spacer></v-spacer>
            <v-btn icon :onclick="card.email">
              <v-icon>email</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout justify-center row wrap>
      <v-flex v-for="card in cardsRowTwo" :key="card.title" shrink style="padding: 20px">
        <v-card width="230px">
          <v-container fill-height pa-2>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline white--text" v-text="card.name"></span>
              </v-flex>
            </v-layout>
          </v-container>

          <v-img :src="card.src" height="200px"></v-img>
          <v-card-actions>
            <v-flex xs12 align-end flexbox>
              <span class="headline white--text" v-text="card.title"></span>
            </v-flex>
            <v-spacer></v-spacer>
            <v-btn icon :onclick="card.email">
              <v-icon>email</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cardsRowOne: [
      {
        name: "Alex Lindström",
        title: "Game Developer",
        src: require("@/assets/alex.jpg"),
        email: "alex@maadwalk.com"
      },
      {
        name: "Markus Winroth",
        title: "Game Developer",
        src: require("@/assets/markus.jpg"),
        email: "markus@maadwalk.com"
      },
      {
        name: "Daniel Karlsson",
        title: "Game Developer",
        src: require("@/assets/daniel.jpg"),
        email: "daniel@maadwalk.com"
      }
    ],
    cardsRowTwo: [
      {
        name: "Anton Anderzén",
        title: "Game Developer",
        src: require("@/assets/anton.jpg"),
        email: "anton@maadwalk.com"
      },
      {
        name: "Konrad Gjertsson",
        title: "Web Developer",
        src: require("@/assets/konrad.jpg"),
        email: "konrad@maadwalk.com"
      }
    ]
  })
};
</script>
