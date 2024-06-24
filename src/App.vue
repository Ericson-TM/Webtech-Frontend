<script setup lang="ts">

import NavbarNav from '@/components/NavbarNav.vue'


</script>

<template>
  <div id="app">
    <NavbarNav />
    <div class = "main-content">
      <router-view />
  </div>
  </div>
</template>

<style scoped>
#app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}

</style>
