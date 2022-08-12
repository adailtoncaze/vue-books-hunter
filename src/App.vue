<template>
  <div
    class="container mx-auto mt-5 items-center border-b border-gray-600">
    <Navbar />
  </div>
  <router-view />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from "./components/header/NavbarComponent.vue";
import Footer from "./components/FooterComponent.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

