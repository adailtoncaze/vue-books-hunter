<template>
  <div class="grid grid-nogutter surface-section text-800">
    <div
      class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center"
    >
      <section>
        <span class="block text-6xl font-bold mb-1"
          >{{data.title}}</span
        >
        <div class="text-6xl text-primary font-bold mb-3">
          your visitors deserve to see
        </div>
        <p class="mt-0 mb-4 text-700 line-height-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <Button
          label="Learn More"
          type="button"
          class="mr-3 p-button-raised"
        ></Button>
        <Button
          label="Live Demo"
          type="button"
          class="p-button-outlined"
        ></Button>
      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
      <img
        src=""
        alt="Image"
        class="md:ml-auto block md:h-full"
        style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
      />
    </div>
  </div>
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
        data.value = books;
        dataLoaded.value = true;
        console.log(data.value);
      } catch (error) {
        errorMsg.value = error.message;
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
