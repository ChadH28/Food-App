<template>
  <div class="home">
        <Carousel/>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>

import Carousel from "@/components/Carousel.vue";

export default {
  name: 'Home',
  components: {
    Carousel,
  }
}
</script>
