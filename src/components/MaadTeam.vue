<template>
  <v-img :src="background" style="height: 100%">
    <v-container grid-list-xl fill-height>
      <v-layout align-center justify-center row fill-height style="height: 100%">
        <v-flex xs12 sm12>
          <v-flex xs12 sm6 offset-sm3>
            <h1>Maadwalk Games</h1>
            <span>
              Maadwalk Games consists of a small and dedicated team brought together by a shared love for Warcraft III and
              Legion TD. Our flagship product, Mercenary TD, is a remake of the original WC3 game for android, which maintains
              the true spirit of Legion TD yet filled with exciting new content.
            </span>
          </v-flex>

          <v-layout justify-center row wrap>
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
                  <v-btn icon>
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
                  <v-btn icon onclick="window.open('mailto:konrad.gjertsson@protonmail.com')">
                    <v-icon>email</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>

<script>
export default {
  data: () => ({
    cardsRowOne: [
      {
        name: "Alex Lindström",
        title: "Game Developer",
        src: require("@/assets/alex.jpg")
      },
      {
        name: "Markus Winroth",
        title: "Game Developer",
        src: require("@/assets/markus.jpg")
      },
      {
        name: "Daniel Karlsson",
        title: "Game Developer",
        src: require("@/assets/daniel.jpg")
      }
    ],
    cardsRowTwo: [
      {
        name: "Anton Anderzén",
        title: "Game Developer",
        src: require("@/assets/anton.jpg")
      },
      {
        name: "Konrad Gjertsson",
        title: "Web Developer",
        src: require("@/assets/jag.jpg")
      }
    ],
    background: require("@/assets/16503_edited.png")
  })
};
</script>
