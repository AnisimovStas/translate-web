<template>
  <div class="auth-container">
    <WordsBackground/>
    <input-word-card/>
    <Card>
      <TButton @click="logout" text="Открыть словарь"/>
    </Card>
    <Card>
      <TButton @click="logout" text="Пройти экзамен"/>
    </Card>
<!--    <Card>-->
<!--      <TButton @click="logout" text="Разлогиниться"/>-->
<!--    </Card>-->
  </div>
</template>
<script setup>
import TButton from "@/components/common/TButton.vue";
import WordsBackground from "@/components/auth/WordsBackground.vue";
import Card from "@/components/common/card.vue";
import InputWordCard from "@/components/translate/InputWordCard.vue";

const emits = defineEmits(['logout'])

function logout() {
  console.log("bye bye")
  document.cookie = "token="
  emits("logout")
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

</style>