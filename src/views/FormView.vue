<template>
  
  
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto bg-gray-800 bg-opacity-40">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Cadastro de Livro
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Informe a baixo as informações catalográficas do livro.
        </p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <form @submit="submit">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="title" class="leading-7 text-sm text-yellow-500"
                  >Título</label
                >
                <input
                  type="text"
                  id="title"
                  name="title"
                  v-model="title"
                  class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="author" class="leading-7 text-sm text-yellow-500"
                  >Autor</label
                >
                <input
                  type="text"
                  id="author"
                  name="author"
                  v-model="author"
                  class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="sinopse" class="leading-7 text-sm text-yellow-500"
                  >Sinopse</label
                >
                <textarea
                  id="sinopse"
                  name="sinopse"
                  v-model="sinopse"
                  class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="image_url" class="leading-7 text-sm text-yellow-500"
                  >Capa (URL)</label
                >
                <input
                  type="text"
                  id="image_url"
                  name="image_url"
                  v-model="image_url"
                  class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label
                  for="collection"
                  class="leading-7 text-sm text-yellow-500"
                  >Coleção</label
                >
                <input
                  type="text"
                  id="collection"
                  name="collection"
                  v-model="collection"
                  class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="volume" class="leading-7 text-sm text-yellow-500"
                  >Volume</label
                >
                <input
                  type="text"
                  id="volume"
                  name="volume"
                  v-model="volume"
                  class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <button
                type="submit"
                class="flex mx-auto text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 -ml-1 w-7 h-7"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M416 128L192 384l-96-96"
                  />
                </svg>
                {{ isLoading ? "Aguarde..." : "Confirmar" }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { supabase } from "@/lib/supabase";
import { ref } from "@vue/runtime-core";
import router from "../router";


const isLoading = ref(false);

const title = ref("");
const author = ref("");
const sinopse = ref("");
const image_url = ref("");
const collection = ref("");
const volume = ref("");

const submit = async (e) => {
  e.preventDefault();
  if (!title.value || !author.value || !sinopse.value || !image_url.value) {
    // show the modal
    alert("Preench os compos obrigatórios!")
  } else {
    const data = {
      title: title.value,
      author: author.value,
      sinopse: sinopse.value,
      image_url: image_url.value,
      collection: collection.value,
      volume: volume.value,
    };
    isLoading.value = true;
    const { status } = await supabase.from("books").insert(data);
    if (status === 201) {
      alert("Livro cadastrado com sucesso!");
      title.value = "";
      author.value = "";
      sinopse.value = "";
      image_url.value = "";
      collection.value = "";
      volume.value = "";
      isLoading.value = false;
      router.push("/");
    } else {
      alert("Algo deu errado!");
      isLoading.value = false;
    }
  }
};
</script>

<style></style>
