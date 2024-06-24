<template>
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
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

const register = async () => {
  try {
    const response = await axios.post('http://localhost:8080/user/register', {
      username: username.value,
      password: password.value
    });
    console.log('User erfolgreich erstellt:', response.data);
    router.push('/');
  } catch (error) {
    console.error('Fehler beim Registrieren:', error);
  }
};
</script>

<style scoped>
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