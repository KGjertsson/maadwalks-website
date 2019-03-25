<template>
  <v-toolbar>
    <v-toolbar-title
      style="cursor: pointer"
      class="headline text-uppercase"
      v-on:click="$router.push('/')"
    >
      <span>Maadwalk</span>
      <span class="font-weight-light">Games</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="item in menu"
        :key="item.title"
        :to="item.link"
        flat
        v-on:click="$router.push(item.route)"
      >{{ item.title }}</v-btn>
    </v-toolbar-items>

    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile v-for="item in menu" :key="item.title" v-on:click="$router.push(item.route)">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { title: "Mercenary TD", route: "mercenary-td" },
        { title: "About", route: "about" },
        { title: "Team", route: "team" },
        { title: "Contact", route: "contact" }
      ]
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    }
  }
};
</script>

<style>
</style>
