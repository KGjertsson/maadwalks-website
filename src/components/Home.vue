
<template>
  <!-- http://play.google.com/store/apps/details?id=com.google.android.apps.maps -->
  <v-container
    fluid
    style="
    padding-left: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    padding-top: 0px;
"
  >
    <v-layout align-end justify-center row>
      <v-img src="https://i.imgur.com/EdAGGFS.jpg" style="height: 100vh">
        <v-btn large>Play now</v-btn>
      </v-img>
    </v-layout>

    <v-layout justify-center>
      <v-flex xs6 sm12>
        <v-card flat style="background-color: transparent">
          <v-container fluid grid-list-md>
            <v-layout row center>
              <v-flex>
                <v-card style="margin: 10px">
                  <v-container fill-height fluid pa-2>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text">Hallå eller!</span>
                      </v-flex>
                    </v-layout>
                  </v-container>

                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kjell_tv.jpg/200px-Kjell_tv.jpg"
                    height="400px"
                  ></v-img>
                  <v-card-actions>
                    <v-container fill-height fluid pa-2>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline white--text">Hallå eller!</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>email</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs6 sm12>
        <v-card flat style="background-color: transparent">
          <v-container fluid grid-list-md>
            <v-layout row center>
              <v-flex>
                <v-card style="margin: 10px">
                  <v-container fill-height fluid pa-2>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text">Hallå eller!</span>
                      </v-flex>
                    </v-layout>
                  </v-container>

                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kjell_tv.jpg/200px-Kjell_tv.jpg"
                    height="400px"
                  ></v-img>
                  <v-card-actions>
                    <v-container fill-height fluid pa-2>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline white--text">Hallå eller!</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>email</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.container.fluid {
  padding: 0px;
}
</style>
