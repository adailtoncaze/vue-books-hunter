<template>
  <div class="container mx-auto mt-5 flex justify-between items-center border-b border-gray-600">
    <Navbar />
    <Searchbar />
  </div>
  <router-view />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from "./components/header/NavbarComponent.vue";
import Searchbar from "./components/header/SearchbarComponent.vue";
import Footer from './components/FooterComponent.vue'
export default {
  components: {
    Navbar,
    Searchbar,
    Footer
  },
};
</script>
