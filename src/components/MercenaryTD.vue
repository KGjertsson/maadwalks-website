<template>
  <v-container fluid grid-list-md>
    <v-layout row align-center fill-height>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

          <v-card-title primary-title>
            <div>
              <div class="headline">Top western road trips</div>
              <span class="grey--text">1,000 miles of wonder</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
};
</script>