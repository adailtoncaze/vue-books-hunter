<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-16 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div
          class="rounded-lg flex flex-wrap h-96 w-full bg-gradient-to-r from-yellow-500 via-purple-500 to-indigo-500 py-32 px-10 relative mb-4">
          <img
            :alt="'Livro ' + data.title"
            class="rounded-lg w-full object-cover h-full object-center block opacity-20 absolute inset-0"
            :src="data.image_url"
          />
          <div class="relative z-10 w-full">
            <h2 class="font-bold text-5xl text-white mb-2">
              {{ data.title }}
            </h2>
            <p class="text-indigo-800 text-3xl font-medium leading-relaxed">
              <span v-if="data.collection">
                <i class="pi pi-th-large" style="font-size: 1.2rem"></i>
                {{ data.collection }}</span
              >
              <span v-if="data.volume" class="ml-2">
                <i class="pi pi-hashtag" style="font-size: 1.2rem"></i>
                {{ data.volume }}</span
              >
            </p>
          </div>
          <div
            class="opacity-80 rounded-lg flex space-x-2 bg-gradient-to-l from-gray-900 via-purple-500 to-indigo-600"
          >
            <div
              class="text-white rounded-lg p-2 text-center"
              style="width: 200px"
            >
              <p>Número de Páginas</p>
              <p><i class="pi pi-file"></i></p>
              <p class="font-semibold">{{ data.page_number }} páginas</p>
            </div>
            <div
              class="text-white rounded-lg p-2 text-center"
              style="width: 200px"
            >
              <p>Editora</p>
              <p><i class="pi pi-building"></i></p>
              <p class="font-semibold">{{ data.publishing_company }}</p>
            </div>
            <div
              class="text-white rounded-lg p-2 text-center"
              style="width: 200px"
            >
              <p>Classificação</p>
              <p><i class="pi pi-user"></i></p>
              <p class="font-semibold">+{{ data.classification }} anos</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="inline-flex w-40 h-40 overflow-hidden">
              <img
                class="rounded-full object-cover object-center h-full w-full"
                :src="data.author_avatar"
                :alt="'Escritor(a)' + data.author"
              />
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <div class="w-14 h-1 bg-gray-800 rounded mt-4 mb-4"></div>
              <p class="text-base text-yellow-500">
                {{ data.author }}
              </p>
            </div>
          </div>
          <div
            class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
          >
            <span
              class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest mb-4"
              >SINOPSE</span
            >
            <p class="leading-relaxed text-lg mb-4 text-gray-300">
              <PVScrollPanel style="width: 100%; height: 300px">
               {{ data.sinopse }}
              </PVScrollPanel>
              
            </p>
          </div>
        </div>
        <div class="rounded-lg h-64 overflow-hidden mt-10">
          <img
            alt="content"
            class="object-cover object-center h-full w-full"
            src="https://dummyimage.com/1200x500"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../lib/supabase";
import { useRoute } from "vue-router";
export default {
  setup() {
    //Create data / vars
    const data = ref(null);
    const dataLoaded = ref(null);
    const route = useRoute();
    const errorMsg = ref(null);
    const statusMsg = ref(null);
    //Get current Id of route
    const currentId = route.params.bookId;

    //Get book data
    const getBook = async () => {
      try {
        const { data: books, error } = await supabase
          .from("books")
          .select("*")
          .eq("id", currentId);
        if (error) throw error;
        data.value = books[0];
        dataLoaded.value = true;
      } catch (error) {
        errorMsg.value = error.message;
        setTimeout(() => {
          errorMsg.value = false;
        }, 5000);
      }
    };
    getBook();
    return {
      data,
      dataLoaded,
      errorMsg,
      statusMsg,
    };
  },
};
</script>
