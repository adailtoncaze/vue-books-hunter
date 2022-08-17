<template>
  <div class="container mx-auto mt-10">
        <PVDataTable :value="data" :paginator="true" :rows="10"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
            currentPageReportTemplate="Registro {first} de {last} Total {totalRecords}">
            <PVColumn field="id" header="Código" :sortable="true"></PVColumn>
            <PVColumn field="title" header="Título" :sortable="true"></PVColumn>
            <PVColumn field="author" header="Autor" :sortable="true"></PVColumn>
            <PVColumn header="Ações" :exportable="false" style="min-width:8rem">
                    <template #body="slotProps">
                        <PVButton icon="pi pi-pencil" class="p-button-rounded p-button-success" @click="editProduct(slotProps.data)" v-tooltip="'Editar'"/>
                        <PVButton icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" v-tooltip="'Excluir'"/>
                    </template>
                </PVColumn>
           
            <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" class="p-button-text" />
            </template>
            <template #paginatorend>
                <Button type="button" icon="pi pi-cloud" class="p-button-text" />
            </template>
        </PVDataTable>    
	</div>
</template>
<script>
import { ref } from "vue";
import { supabase } from "../lib/supabase";

export default {
  setup() {
    //Create data / vars
    const data = ref(null);
    const dataLoaded = ref(null);
    const errorMsg = ref(null);
    const statusMsg = ref(null);

    //Get book data
    const getBook = async () => {
      try {
        const { data: books, error } = await supabase
          .from("books")
          .select("*")
          .order("id");
        if (error) throw error;
        data.value = books;
        dataLoaded.value = true;
        console.log(data.value);
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
<style scoped>
.p-button {
    margin-right: .5rem;
}
</style>