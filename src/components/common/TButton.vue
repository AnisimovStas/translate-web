<template>
  <button>{{ text }}</button>
</template>
<script setup>
defineProps({
  text: String,
})
</script>
<style scoped>
button {
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>