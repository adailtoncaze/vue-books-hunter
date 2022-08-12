<template>
  <PVToast />
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto bg-gradient-to-b from-gray-800">
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
                  >Título *</label
                >
                <input
                  type="text"
                  id="title"
                  name="title"
                  v-model="title"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-yellow-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="author" class="leading-7 text-sm text-yellow-500"
                  >Autor *</label
                >
                <input
                  type="text"
                  id="author"
                  name="author"
                  v-model="author"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-yellow-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="sinopse" class="leading-7 text-sm text-yellow-500"
                  >Sinopse *</label
                >
                <textarea
                  id="sinopse"
                  name="sinopse"
                  v-model="sinopse"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-yellow-300 h-40 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="image_url" class="leading-7 text-sm text-yellow-500"
                  >Capa (URL) *</label
                >
                <input
                  type="text"
                  id="image_url"
                  name="image_url"
                  v-model="image_url"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-yellow-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-yellow-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-yellow-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="flex justify-end space-x-3 w-full">
              <div>
                <router-link to="/">
                  <PVButton
                    style="color: #fff"
                    icon="pi pi-chevron-left"
                    label="Voltar"
                    class="p-button-secondary"
                  />
                </router-link>
              </div>
                <PVButton
                  @click="submit"
                    style="color: #fff"
                    icon="pi pi-check"
                    label="Confirmar"
                    class="p-button-warning"
                    :loading="isLoading"
                  />
              <div>
              </div>
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
import { useToast } from "primevue/usetoast";

const toast = useToast();
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
    // show the toast
    toast.add({
      severity: "warn",
      summary: "Ops!!!",
      detail: "Calma, primeiro preencha os campos obrigatórios, marcados com *",
      life: 4000,
    });
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
      toast.add({
        severity: "success",
        summary: "Parabéns!!!",
        detail: "Seu livro foi cadastrado com sucesso.",
        life: 4000,
      });
      title.value = "";
      author.value = "";
      sinopse.value = "";
      image_url.value = "";
      collection.value = "";
      volume.value = "";
      isLoading.value = false;
      //router.push("/");
    } else {
      toast.add({
        severity: "error",
        summary: "Algo deu errado!",
        detail: "Mas não se preocupe, vamos resolver.",
        life: 4000,
      });
      isLoading.value = false;
    }
  }
};
</script>

<style></style>
