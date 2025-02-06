<template>
  <auth-page v-if="state ==='not-authorized'"
             @authSuccess="changeState('translate')"
  />
  <translate-page v-if="state ==='translate'"
                  @logout="changeState('not-authorized')"
  />
</template>
<script setup>
// временное решение до добавления роутера
import AuthPage from "@/pages/authPage.vue";
import {isAuthorized} from "@/utils/errors.js";
import TranslatePage from "@/pages/translatePage.vue";
import {onBeforeMount, ref} from "vue";

const state = ref('not-authorized');
const changeState = (newState) => {
  console.log("new state")
  state.value = newState;
}

onBeforeMount(() => {
  if (isAuthorized()) {
    state.value = 'translate';
  }
})

</script>

