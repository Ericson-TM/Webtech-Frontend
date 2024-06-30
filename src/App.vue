<script setup lang="ts">

import NavbarNav from '@/components/NavbarNav.vue'
import FooterFoot from '@/components/FooterFoot.vue'


</script>

<template>
  <div id="app">
    <NavbarNav />
    <div class = "main-content">
      <router-view />
  </div>
  </div>
  <FooterFoot>
  </FooterFoot>
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
  width: 100%;
}

</style>
