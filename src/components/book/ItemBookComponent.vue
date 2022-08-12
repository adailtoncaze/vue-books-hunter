<template>
  <div
    v-for="book in books"
    :key="book.id"
    class="max-w-sm bg-gray-800 flex flex-col justify-between"
  >
    <a href="#">
      <img :src="book.image_url" alt="" />
    </a>

    <div class="p-5">
      <h2>{{ book.author }}</h2>
      <p class="flex space-x-2">
        <img class="h-5" src="@/assets/images/estrela.svg" alt="Estrela" />
        <img class="h-5" src="@/assets/images/estrela.svg" alt="Estrela" />
        <img class="h-5" src="@/assets/images/estrela.svg" alt="Estrela" />
        <img class="h-5" src="@/assets/images/estrela.svg" alt="Estrela" />
      </p>
    </div>
  </div>
</template>

<script>
import { supabase } from "../../lib/supabase";
export default {
  name: "ItemBook",
  data: () => ({
    books: [],
    database: null,
  }),
  created() {
    this.database = supabase;
  },
  async mounted() {
    await this.getBooks();
  },
  methods: {
    async getBooks() {
      const { data, error } = await this.database
        .from("books")
        .select()
        .order("id");
      if (error) {
        alert(error);
        return;
      }
      this.setBooks(data);
    },
    setBooks(books) {
      this.books = books;
    },
  },
};
</script>

<style></style>
