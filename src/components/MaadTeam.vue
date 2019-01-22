<template>
  <v-container style="padding: 0px" fluid grid-list-md text-xs-center>
    <v-layout align-end justify-center row>
      <v-img src="http://efdreams.com/data_images/dreams/people/people-02.jpg" aspect-ratio="3"></v-img>
    </v-layout>

    <v-layout align-end justify-center row fill-height>
      <v-flex xs8 align-end flexbox>
        <span>Alliance is a gaming organisation founded by Team Razer and Alex Garfield in April 2013. Since its formation, the team has been a staple amongst the best European Dota 2 teams. The foundation of what would later become the Alliance Dota 2 team was laid when Swedish DotA veteran Loda, who had just left Singaporean Team Zenith after their dissolution following The International 2012, was approached by a sponsor (which would later become the Alliance organization) asking him if he was interested in putting together a team.[1] Looking back at the glory days of his early career, his decision was to try to go with an all-swedish lineup in the same spirit as his oldest and most successful team, SK Gaming of the 2008 era. He and fellow Swedish support veteran Akke's, eyes fell upon rising Swedish solo-mid star s4, whom Loda had noticed during their HoN days. s4 and AdmiralBulldog were playing for the new upstart team No Tidehunter created by s4 and Canadian support player EternaLEnVy. In late October 2012, it was announced that Loda and Akke had joined team No Tidehunter,[2] only one month before Dreamhack Winter 2012 which the team had qualified for with a mixed roster including German carry Black^.</span>
      </v-flex>
    </v-layout>

    <v-layout justify-center row wrap>
      <v-flex v-for="card in cards" :key="card.title" shrink>
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
    cards: [
      {
        name: "Kjell Birgittasson",
        title: "Poddare",
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kjell_tv.jpg/200px-Kjell_tv.jpg"
      },
      {
        name: "Kjell Birgittasson",
        title: "Mamma",
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kjell_tv.jpg/200px-Kjell_tv.jpg"
      },
      {
        name: "Kjell Birgittasson",
        title: "Pojkvän",
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kjell_tv.jpg/200px-Kjell_tv.jpg"
      },
      {
        name: "Kjell Birgittasson",
        title: "Toto Häst 1",
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kjell_tv.jpg/200px-Kjell_tv.jpg"
      },
      {
        name: "Kjell Birgittasson",
        title: "Toto Häst 2",
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kjell_tv.jpg/200px-Kjell_tv.jpg"
      }
    ]
  })
};
</script>
