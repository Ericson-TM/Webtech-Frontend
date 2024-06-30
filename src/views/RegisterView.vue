<template>
  <div class="container">
    <div class="register-form">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <div class="form-group">
          <label for="captcha" class="form-label">Was ist {{ num1 }} + {{ num2 }}?</label>
          <input type="text" v-model="captcha" class="form-control" id="captcha" required>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');
const captcha = ref('');
const num1 = ref(Math.floor(Math.random() * 10));
const num2 = ref(Math.floor(Math.random() * 10));

const register = async () => {
  const captchaResult = parseInt(captcha.value, 10);
  if (captchaResult !== (num1.value + num2.value)) {
    alert('Captcha ist falsch.');
    return;
  }

  try {
    const response = await axios.post('http://localhost:8080/user/register', {
      username: username.value,
      password: password.value,
    });

    if (response.status === 200) {
      alert('Registrierung erfolgreich!');
      await router.push('/'); // Navigiere zur Login-Seite nach erfolgreicher Registrierung
    } else {
      alert('Registrierung fehlgeschlagen: ' + response.data.message);
      username.value = '';
      password.value = '';
    }
  } catch (error) {
    console.error('Ein Fehler ist bei der Registrierung aufgetreten:', error);
    alert('Registrierung fehlgeschlagen.');
  }
};
</script>

<style scoped>

.container{
  padding-top: 58px;
}
.register-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.register-form h2 {
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  background-color: #007bff;
  color: white;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 1rem;
}

</style>