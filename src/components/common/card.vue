<template>
  <div class="form-container">
    <slot/>
  </div>
</template>


<script setup></script>


<style scoped>
.form-container {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
  .form-container {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .form-container {
    padding: 1.5rem;
  }
}
</style>