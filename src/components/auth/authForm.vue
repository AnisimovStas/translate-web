<template>
  <div class="form-container">
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
</template>

<script setup>
import TInput from "@/components/common/TInput.vue";
import TButton from "@/components/common/TButton.vue";
import {ref} from "vue";
import {sendPostRequest} from "@/utils/responseWrapper.js";

const isLogin = ref(true);
const email = ref('');
const username = ref('');
const password = ref('');

const toggleForm = () => {
  isLogin.value = !isLogin.value;
};


const sendForm = () => {
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

  sendPostRequest(urlPath, body);
}


</script>
<style scoped>
h2 {
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 2rem;
  text-align: center;
}

.form-container {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 500px;
  backdrop-filter: blur(10px);
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
  .form-container {
    padding: 2rem;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .form-container {
    width: 100%;
    padding: 1.5rem;
  }

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