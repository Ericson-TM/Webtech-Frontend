<template>
  <div class="logIN">
    <h1>This is a Login Page</h1>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const unvalidPassword = ref('');

const validatePassword = () => {
  const value = password.value;
  let error = '';

  if (value.length < 8) {
    error = 'Password must be at least 8 characters long.';
  } else if (!/[A-Z]/.test(value)) {
    error = 'Password must contain at least one uppercase letter.';
  } else if (!/[a-z]/.test(value)) {
    error = 'Password must contain at least one lowercase letter.';
  } else if (!/[0-9]/.test(value)) {
    error = 'Password must contain at least one number.';
  } else if (!/[\W_]/.test(value)) {
    error = 'Password must contain at least one special character.';
  }

  unvalidPassword.value = error;
  return error === '';
};
const login = () => {

  if (validatePassword()) {

    console.log('Username:', username.value);
    console.log('Password:', password.value);
  }else{
    console.log('This is not a valid password', unvalidPassword.value);
  }
};
</script>

<style>
@media (min-width: 1024px) {
  .logIN {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  form {
    margin-top: 20px;
    width: 300px;
  }

  label {
    margin-bottom: 5px;
    display: block;
  }

  input {
    margin-bottom: 10px;
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
}
</style>