<template>
  <div class="background">
    <div class="rows-wrapper">
      <div class="greetings-wrapper" v-for="row in rows" :key="row">
        <div class="greeting" v-for="(greeting, index) in greetings" :key="`${row}-${index}`">
          {{ greeting }}
        </div>
        <div class="greeting" v-for="(greeting, index) in greetings" :key="`${row}-clone-${index}`">
          {{ greeting }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from "vue";

const greetings = ref([
  'Hello', 'Hola', 'Bonjour', 'Hallo', 'Ciao', 'Привет', '안녕하세요',
  'Hello', 'Hola', 'Bonjour', 'Hallo', 'Ciao', 'Привет', '안녕하세요'
]);

const rows = computed(() => Array.from({length: 10}, (_, i) => i)); // Создаем 5 рядов текста
</script>

<style scoped>
* {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.rows-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
}

.greetings-wrapper {
  display: flex;
  white-space: nowrap;
  animation: moveGreetings 20s linear infinite;
}

.greeting {
  font-family: 'Arial', sans-serif;
  color: rgba(255, 255, 255, 0.1);
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 20px;
  transform: rotate(45deg);
}

@keyframes moveGreetings {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>