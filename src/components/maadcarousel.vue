<template>
  <v-carousel hide-delimiters hide-controls height=937>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://pbs.twimg.com/profile_images/518515693763850241/bfyo0t3b.jpeg'
          },
          {
            src: 'https://imageproxy.b17g.services/convert/resize/400x225/source/https%3A%2F%2Faman-assets.b17g.net%2F56546dd9fca38fc7b50007b5%2FKjell1.jpg%3F1'
          },
          {
            src: 'https://imageproxy.b17g.services/?quality=70&resize=1200x630&shape=cut&source=https%3A%2F%2Faman-assets.b17g.net%2F564c90bab9a9f600d90004fe%2Ffb1024_kjell2.png%3F4'
          },
          {
            src: 'http://3.bp.blogspot.com/_Q5pm3gQLKj8/SZ5xl1033YI/AAAAAAAAAIw/NWywlVYsBc8/s400/birgitta_peter.jpg'
          }
        ]
      }
    }
  }
</script>