<template>
  <div class="container mx-auto mt-10">
    <div class="flex space-x-2">
      <div
        class="rounded p-2 mb-10 flex flex-1 items-center justify-between bg-gray-800"
      >
        <div class="ml-4 flex space-x-4 items-center">
          <img src="@/assets/images/livro.svg" alt="Livro" class="h-10" />
          <h1 class="text-yellow-500 text-2xl font-semibold">Meus Livros</h1>
        </div>
        <p
          class="mr-4 bg-yellow-500 rounded-full px-4 py-3 text-2xl font-semibold"
        >
          78
        </p>
      </div>

      <div class="rounded mb-10 flex">
        <router-link
          to="/new-book"
          tag="button"
          class="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-600 font-medium rounded-lg inline-flex text-sm px-5 py-2.5 text-center items-center mr-2"
        >
          <svg
            aria-hidden="true"
            class="mr-2 -ml-1 w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M256 112v288M400 256H112"
            />
          </svg>
          Novo Livro
        </router-link>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-5 md:cols-4 lg:cols-4 gap-6">
      <ItemBook />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemBook from "../components/book/ItemBookComponent.vue";
export default {
  components: {
    ItemBook,
  },
};
</script>
