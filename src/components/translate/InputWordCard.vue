<template>
  <Card>
    <div class="input-container">
      <TInput v-model:value="word" label="Перевести"/>
      <TButton class="input-btn" :is-disabled="isLoading" @click="translateHandler">{{ inputBtnIcon }}</TButton>
    </div>

    <p v-if="!!translatedWord">Перевод: {{ translatedWord }}</p>
  </Card>
</template>
<script setup>

import Card from "@/components/common/card.vue";
import TButton from "@/components/common/TButton.vue";
import TInput from "@/components/common/TInput.vue";
import {computed, ref, watch} from "vue";
import {sendPostRequest} from "@/utils/responseWrapper.js";

const inputBtnIcon = computed(() => {
  return isLoading.value ? "⏳" : "🔎"
});


const word = ref("");
const translatedWord = ref(null);
const isLoading = ref(false);


const translateHandler = async () => {
  if (isLoading.value) {
    return;
  }
  isLoading.value = true;
  const response = await sendPostRequest("/translate", word.value);
  isLoading.value = false;
  translatedWord.value = response.translate;
}


watch(() =>
    word.value, () => {
  translatedWord.value = null;
})


</script>


<style scoped>
.input-container {
  display: flex;
  align-items: center;
  gap: 1rem;

}

.input-btn {
  height: 3rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>