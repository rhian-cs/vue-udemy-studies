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
import AppBar from "./components/template/Heading.vue";
import Footer from "./components/template/Footer.vue";
import ImageCarousel from "./components/widgets/ImageCarousel.vue";
import Sidebar from "./components/template/Sidebar.vue";

export default {
  components: {
    AppBar,
    Footer,
    ImageCarousel,
    Sidebar,
  },
};
</script>
