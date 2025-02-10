<template>
  <div class="auth-container">
    <!--    <WordsBackground/>-->
    <input-word-card v-if="!isDictionaryOpened"/>
    <Card>
      <TButton v-if="!isDictionaryOpened" @click="changeDictionaryState" text="Открыть словарь"/>
      <div v-if="isDictionaryOpened" class="dictionary__opened">
        <h3>Словарь:</h3>

        <TranslateTable/>


        <TButton class="close-dictionary-btn"  @click="changeDictionaryState" text="Закрыть словарь словарь"/>
      </div>
    </Card>
    <!--    <Card>-->
    <!--      <TButton @click="logout" text="Пройти экзамен"/>-->
    <!--    </Card>-->
    <Card v-if="!isDictionaryOpened">
      <TButton @click="logout" text="Разлогиниться"/>
    </Card>
  </div>
</template>
<script setup>
import TButton from "@/components/common/TButton.vue";
import Card from "@/components/common/card.vue";
import InputWordCard from "@/components/translate/InputWordCard.vue";
import {ref} from "vue";
import TranslateTable from "@/components/translate/TranslateTable.vue";

const emits = defineEmits(['logout'])

const isDictionaryOpened = ref(false)

function logout() {
  console.log("bye bye")
  document.cookie = "token="
  emits("logout")
}

function changeDictionaryState() {
  console.log("clicked open dictionary")
  isDictionaryOpened.value = !isDictionaryOpened.value
}

</script>
<style scoped>
.auth-container {
  position: relative;
  height: 100vh;
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  overflow: hidden;
  font-family: 'Arial', sans-serif;
}

@media (max-width: 768px) {
  .auth-container {
    flex-direction: column;
  }
}


.dictionary__opened {
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>