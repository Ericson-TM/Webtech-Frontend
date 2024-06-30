<template>
  <div class="container">
    <div class="contact-form">
      <h2>Kontaktieren Sie uns</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="message">Nachricht:</label>
          <textarea v-model="message" id="message" rows="5" required></textarea>
        </div>
        <button type="submit">Absenden</button>
      </form>
      <p v-if="successMessage">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>


</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const email = ref('')
const message = ref('')
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  try {
    const response = await axios.post('/', {
      name: name.value,
      email: email.value,
      message: message.value
    })
    successMessage.value = 'Ihre Nachricht wurde erfolgreich gesendet!'
    errorMessage.value = ''
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (error) {
    errorMessage.value = 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.'
    successMessage.value = ''
  }
}
</script>

<style scoped>

.container{
  padding-top: 58px;
}
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #8a675c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #bc8b7d;
}

.error {
  color: red;
  margin-top: 1rem;
}
</style>
