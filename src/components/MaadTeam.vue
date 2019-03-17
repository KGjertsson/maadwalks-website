<template>
  <v-container style="padding: 0px" fluid grid-list-md text-xs-center>
    <v-layout align-end justify-center row fill-height>
      <v-flex xs8 align-end flexbox>
        <h1>Maadwalk Games</h1>
        <span>The foundation of what would later become the Alliance Dota 2 team was laid when Swedish DotA veteran Loda, who had just left Singaporean Team Zenith after their dissolution following The International 2012, was approached by a sponsor (which would later become the Alliance organization) asking him if he was interested in putting together a team.[1] Looking back at the glory days of his early career, his decision was to try to go with an all-swedish lineup in the same spirit as his oldest and most successful team, SK Gaming of the 2008 era. He and fellow Swedish support veteran Akke's, eyes fell upon rising Swedish solo-mid star s4, whom Loda had noticed during their HoN days. s4 and AdmiralBulldog were playing for the new upstart team No Tidehunter created by s4 and Canadian support player EternaLEnVy. In late October 2012, it was announced that Loda and Akke had joined team No Tidehunter,[2] only one month before Dreamhack Winter 2012 which the team had qualified for with a mixed roster including German carry Black^.</span>
      </v-flex>
    </v-layout>

    <v-layout justify-center row wrap>
      <v-flex v-for="card in cardsRowOne" :key="card.title" shrink style="padding: 20px">
        <v-card>
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
        <v-card>
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
      <v-flex v-for="card in cardsRowThree" :key="card.title" shrink style="padding: 20px">
        <v-card>
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
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cardsRowOne: [
      {
        name: "Alex Lindström",
        title: "Game Developer",
        src: require("@/assets/Kjell_tv.jpg")
      },
      {
        name: "Markus Winroth",
        title: "Game Developer",
        src: require("@/assets/Kjell_tv.jpg")
      },
      {
        name: "Daniel Karlsson",
        title: "Game Developer",
        src: require("@/assets/Kjell_tv.jpg")
      }
    ],
    cardsRowTwo: [
      {
        name: "Anton Anderzén",
        title: "Game Developer",
        src: require("@/assets/Kjell_tv.jpg")
      },
      {
        name: "Konrad Gjertsson",
        title: "Web Developer",
        src: require("@/assets/Kjell_tv.jpg")
      }
    ]
  })
};
</script>
