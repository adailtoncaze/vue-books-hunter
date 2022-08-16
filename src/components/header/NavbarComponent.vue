<template>
  <nav>
    <div class="flex justify-between">
      <div class="flex items-center">
        <router-link to="/">
          <img
            src="@/assets/images/logo.png"
            alt="Logo do app Books Hunter"
            class="mr-10"
          />
        </router-link>
        <div class="hidden md:flex items-center space-x-3">
          <ul class="flex items-center space-x-8">
          <li>
              <router-link to="/"> Início </router-link>
            </li>
            <li>
              <router-link to="/books"> Livros </router-link>
            </li>
            <li>
              <router-link to="/authors"> Autores </router-link>
            </li>
            <li>
              <router-link to="profile"> Profile </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Searchbar />
      </div>
      <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="#fff"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
    </div>
  </nav>
</template>

<script>
import Searchbar from "../../components/header/SearchbarComponent.vue";
export default {
  components: {
    Searchbar,
  },
};
</script>

<style></style>
