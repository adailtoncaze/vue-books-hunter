<template>
  <div class="container mx-auto mt-10">
    <div
      class="rounded p-2 mb-10 flex items-center justify-between bg-gray-800"
    >
      <div class="ml-4 flex space-x-4 items-center">
        <img src="@/assets/images/livro.svg" alt="Livro" class="h-10" />
        <h1 class="text-yellow-500 text-2xl font-semibold">Meus Livros</h1>
      </div>
      <p class="mr-4 bg-yellow-500 rounded-full px-4 py-3 text-2xl font-semibold">78</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-5 md:cols-4 lg:cols-4 gap-6">
      <ItemBook />
      <ItemBook />
      <ItemBook />
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
