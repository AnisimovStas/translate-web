<template>
  <card>
    <div class="container">
    <h2>{{ isLogin ? 'Войти' : 'Зарегистрироваться' }}</h2>

    <TInput
        label="Имя пользователя"
        type="text"
        v-model:value="username"
    />
    <TInput
        v-if="!isLogin"
        label="Почта"
        type="email"
        v-model:value="email"
    />
    <TInput
        label="Пароль"
        type="password"
        v-model:value="password"
    />

    <div class="form-actions">
      <TButton @click="sendForm" :text="isLogin ? 'Войти' : 'Зарегистрироваться'"/>
      <p @click="toggleForm">
        {{ isLogin ? 'Нет аккаунта? Зарегестрируйтесь' : 'Уже есть аккаунт? Войти' }}</p>
    </div>
    </div>
  </card>
</template>

<script setup>
import TInput from "@/components/common/TInput.vue";
import TButton from "@/components/common/TButton.vue";
import {ref} from "vue";
import {sendPostRequest} from "@/utils/responseWrapper.js";
import Card from "@/components/common/card.vue";

const isLogin = ref(true);
const email = ref('');
const username = ref('');
const password = ref('');
const emits = defineEmits(['authSuccess'])

const toggleForm = () => {
  isLogin.value = !isLogin.value;
};


const sendForm = async () => {
  const body = {
    username: username.value,
    password: password.value
  }
  let urlPath = "/auth"

  if (isLogin.value) {
    console.log("отправляю запрос на логин")
    urlPath += "/sign-in";
  } else {
    urlPath += "/sign-up";
    console.log("отправляю запрос на регистрацию")
    body.email = email.value;
  }

  const data = await sendPostRequest(urlPath, body);
  if (data === null) {
    return;
  }
  document.cookie = `token=${data.token}`;
  emits('authSuccess')
}


</script>
<style scoped>
h2 {
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 2rem;
  text-align: center;
}

.container {
  width: 500px;
}

p {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #007bff;
  cursor: pointer;
  transition: color 0.3s ease;
}

p:hover {
  color: #0056b3;
}

@media (max-width: 768px) {
  .container {
    width: 90vw;
  }
}

@media (max-width: 480px) {
  button {
    padding: 0.8rem 1.5rem;
  }

  p {
    font-size: 0.8rem;
  }
}

.form-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>