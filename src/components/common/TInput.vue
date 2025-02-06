<template>
  <div class="input-group">
    <label :for="label">{{ label }}</label>
    <input :type="type" :value="value" @input="$emit('update:value', $event.target.value)">
  </div>
</template>

<script setup>
defineProps({
  label: String,
  type: String,
  value: String,
})


</script>


<style scoped>
.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-size: 1rem;
}

input {
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s ease;
}

.input-group input:focus {
  border-color: #007bff;
  outline: none;
}
</style>