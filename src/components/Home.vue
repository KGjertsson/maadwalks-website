<template>
  <v-container-fluid>
    <v-carousel hide-delimiters hide-controls height=937>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade"
        transition="fade"
      ></v-carousel-item>
    </v-carousel>
    <h1>Feed from google play store</h1>
  </v-container-fluid>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://i.imgur.com/EdAGGFS.jpg'
          },
          {
            src: 'https://pixelz.cc/wp-content/uploads/2017/12/mercedes-benz-amg-gt-r-uhd-4k-wallpaper.jpg'
          },
          {
            src: 'https://images8.alphacoders.com/712/712496.jpg'
          },
          {
            src: 'https://gameranx.com/wp-content/uploads/2017/03/Prey-4K-Wallpaper.jpg'
          }
        ]
      }
    }
  }
</script>
