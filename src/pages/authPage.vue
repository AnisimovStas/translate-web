<template>
  <div class="auth-container">
    <WordsBackground/>
    <authForm
    @auth-success="$emit('auth-success')"
    />
  </div>
</template>

<script setup>
import AuthForm from "@/components/auth/authForm.vue";
import WordsBackground from "@/components/auth/WordsBackground.vue";
</script>

<style scoped>
.auth-container {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  overflow: hidden;
  font-family: 'Arial', sans-serif;
}

</style>