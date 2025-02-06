<template>
  <div v-if="visible && errors.length" class="error-notifier">
    <div v-for="(errorMessage, index) in errors" :key="index" class="error-item">
      <span class="error-message">{{ errorMessage }}</span>
      <button @click="closeError(index)" class="close-btn">×</button>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {getErrors} from "@/utils/errors.js";
import {ERROR_DURATION} from "@/utils/constants.js";

// Реф для списка ошибок
const errors = ref([]);

// Реф для видимости блока
const visible = ref(false);

const trackErrors = () => {
  const gettedErrors = getErrors();
  if (gettedErrors.length > 0) {
    gettedErrors.forEach((error) => {
      errors.value.push(error);
    })
    sessionStorage.removeItem("errors");
    visible.value = true;

    setTimeout(() => {
      visible.value = false;
      errors.value = [];
    }, ERROR_DURATION)

  }
};

setInterval(trackErrors, 500);


// Метод для скрытия ошибки по индексу
const closeError = (index) => {
  errors.value.splice(index, 1); // Удаляем ошибку по индексу
  if (errors.value.length === 0) {
    visible.value = false; // Если нет ошибок, скрываем уведомление
  }
};

</script>

<style scoped>
.error-notifier {
  position: absolute;
  top: 15px;
  right: 15px;
  color: white;
  font-size: 16px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 80%;
  min-width: 150px;
  word-wrap: break-word;
  white-space: normal;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

.error-item {
  background-color: red;
  border-radius: 5px;
  padding: 10px;

  display: flex;
  align-items: center;
}

.error-message {
  flex-grow: 1;
  word-wrap: break-word;
  white-space: normal;
  font-size: calc(16px + 0.5vw); /* Динамический размер шрифта */
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;
}

.close-btn:hover {
  color: #ddd;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
