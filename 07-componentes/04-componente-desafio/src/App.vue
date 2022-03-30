<template>
  <v-app>
    <Sidebar />
    <AppBar />

    <v-content>
      <ImageCarousel />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import AppBar from "./AppBar.vue";
import Footer from "./Footer.vue";
import ImageCarousel from "./ImageCarousel.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    AppBar,
    Footer,
    ImageCarousel,
    Sidebar,
  },
};
</script>
