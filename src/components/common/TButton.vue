<template>
  <button :class="buttonStyles">{{ text }}
    <slot/>
  </button>
</template>
<script setup>
import {computed} from "vue";

const props = defineProps({
  text: String,
  isDisabled: Boolean,
  isActive: Boolean,
})

const buttonStyles = computed(() => {
  let classes = "button ";
  if (props.isDisabled) {
    classes += "button__disabled ";
  }
  if (props.isActive) {
    classes += "button__active ";
  }
  return classes;
})

</script>
<style scoped>
.button {
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}

.button__disabled {
  opacity: 0.6;
  background-color: #555555;

  &:hover {
    background-color: #555555;
  }
}

.button__active {
  opacity: 0.6;
  background-color: #0056b3;

  &:hover {
    background-color: #0056b3;
  }
}


</style>