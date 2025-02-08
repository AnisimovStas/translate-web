<template>
  <div class="table" v-if="!isLoading">
    <div class="row header">
      <div class="cell">Оригинал</div>
      <div class="cell">Перевод</div>
      <div class="cell">Счетчик добавлений</div>
    </div>


    <div class="row" v-for="word in words" :key="word">
      <div class="cell">{{ word.origin }}</div>
      <div class="cell">{{ word.translate }}</div>
      <div class="cell">{{ word.counter }}</div>
    </div>
  </div>
  <p v-else> Загружаю данные!</p>


  <div class="pagination" v-if="pagination.totalPage >1">

    <TButton v-for="(pageNumber,idx) in pagination.totalPage" :key="page"
             :is-active="idx === pagination.currentPage"
             @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </TButton>

  </div>
</template>


<script setup>
import {onBeforeMount, ref} from "vue";
import {sendPostRequest} from "@/utils/responseWrapper.js";
import TButton from "@/components/common/TButton.vue";

const isLoading = ref(false);

const words = ref();
const pagination = ref({
  currentPage: 0,
  totalPage: 0,
  size: 10
})

onBeforeMount(async () => {
  isLoading.value = true;
  await searchWord();
})

async function changePage(page) {
  pagination.value.currentPage = page - 1;
  await searchWord();
}

async function searchWord() {
  const response = await sendPostRequest("/translate/search", null, {
    size: pagination.value.size,
    page: pagination.value.currentPage
  });
  words.value = response.content;
  pagination.value.totalPage = response.totalPages;
  isLoading.value = false;
}

</script>


<style scoped>
.table {
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  width: 80%;
  margin: 20px auto;
}

.row {
  display: flex;

}

.cell {
  flex: 1;
  border: 1px solid #000;
  padding: 10px;
  text-align: center;
  overflow: hidden;
}

.header {
  font-weight: bold;
  background-color: #ddd;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>