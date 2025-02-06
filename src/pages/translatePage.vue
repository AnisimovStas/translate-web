<template>
  <div>
    ура страница переводов!
  </div>

  <button @click="logout">разлогиниться</button>
</template>
<script setup>
const emits = defineEmits(['logout'])

function logout() {
  console.log("bye bye")
  document.cookie ="token="
  emits("logout")
}

</script>
<style scoped>

</style>