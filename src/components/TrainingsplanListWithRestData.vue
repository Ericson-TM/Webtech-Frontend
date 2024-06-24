<script setup lang="ts">
import {onMounted, ref, type Ref} from 'vue'
import axios from 'axios'

defineProps<{title: string}>()

type Trainingsplan = {id: number, name: string, zeit: string, dauer: string, intensivitaet: number }

const trainingsplaene: Ref<Trainingsplan[]> = ref([])
const nameField = ref('')
const zeitField = ref('')
const dauerField = ref('')
const intensivitaetField = ref(0)

const url = import.meta.env.VITE_APP_BACKEND_BASE_URL

function createTrainingsplan():void{
  if (!nameField.value || !zeitField.value || !dauerField.value || !intensivitaetField.value) {
    window.alert('Bitte füllen Sie alle Felder aus')
    return
  }

  const trainingsplan = {
    name: nameField.value,
    zeit: zeitField.value,
    dauer: dauerField.value,
    intensivitaet: intensivitaetField.value,

  }

  axios
    .post<Trainingsplan>(`${url}/trainingsplaene`, trainingsplan)
    .then((response) => trainingsplaene.value.push(response.data))
    .then(() => {
      nameField.value = ''
      zeitField.value = ''
      dauerField.value = ''
      intensivitaetField.value = 0
    })
    .catch((error) => console.error('Fehler beim Erstellen des Plans', error))
}

function requestTrainingsplan():void{
  axios
    .get<Trainingsplan[]>(`${url}/trainingsplaene`)
    .then((response) => trainingsplaene.value = response.data)
    .catch((error) => console.error(error))
}

function removeTrainingsplan(id: number):void{
  axios
    .delete<void>(`${url}/trainingsplaene/${id}`)
    .then(() => trainingsplaene.value = trainingsplaene.value.filter((trainingsplan) => trainingsplan.id !== id))
    .catch((error) => console.error(error))
}

onMounted(() => {
  requestTrainingsplan()
})
</script>

<template>
  <h2>{{ title }}</h2>
  <form @submit.prevent="createTrainingsplan">
    <input type="text" v-model="nameField" placeholder="Name"/>
    <input type="text" v-model="zeitField" placeholder="Zeit" />
    <input type="text" v-model="dauerField" placeholder="Dauer"/>
    <input type="number" v-model="intensivitaetField" placeholder="Schwierigkeit"/>
    <button>Erstellen</button>
  </form>
  <hr />
  <table>
    <tr>
      <th>Entfernen</th>
      <th>ID</th>
      <th>Name</th>
      <th>Zeit</th>
      <th>Dauer</th>
      <th>Intensivität</th>
    </tr>
    <tr v-if="!trainingsplaene.length">
      <td colspan="6">Keine Trainingspläne vorhanden</td>
    </tr>
    <tr v-for="trainingsplan in trainingsplaene" :key="trainingsplan.id">
      <td>
        <button @click="removeTrainingsplan(trainingsplan.id)" class="delete">Entfernen</button></td>
      <td>{{ trainingsplan.id }}</td>
      <td>{{ trainingsplan.name }}</td>
      <td>{{ trainingsplan.zeit }}</td>
      <td>{{ trainingsplan.dauer }}</td>
      <td>{{ trainingsplan.intensivitaet }}</td>
    </tr>
  </table>

</template>

<style scoped>
form{
  display: flex;
  gap: 16px;
  margin: 0 -16px;

  *{
    margin: 16px;
  }

  input{
    padding: 8px;
    font-size: 1em;
    flex-grow: 1;
    margin: 16px 0;
  }
}

table{
  width: 100%;
  margin: 8px -8px 0;
  border-collapse: collapse;

  th, td{
    padding: 8px;
    text-align: left;
  }
}


button{
  border-radius: 48px;
  padding: 8px;
  border: none;
  cursor: pointer;
  margin: 16px 0;

  &.delete{
    background-color: darkred;
    color: white;
  }
}
</style>