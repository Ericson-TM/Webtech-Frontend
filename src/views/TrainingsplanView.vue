<script setup lang="ts">
import {onMounted, ref, type Ref} from 'vue'

defineProps<{ title: string }>()

type Trainingsplan = {
  id: number
  time: number
  distance: number
}

const trainingsplan: Ref<Trainingsplan[]> = ref([])
const nameField = ref('')
let currentId = 1

</script>

<template>
  <div>
    <h1>Trainingsplan</h1>
  </div>
</template>

<style scoped>

</style>