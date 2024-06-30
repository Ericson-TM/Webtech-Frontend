<script setup lang="ts">

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-custom">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"><img src="@/assets/Logo1.png" style="width: 100px"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Über uns</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/trainingsplaene">Trainingspläne</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Kontakt</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/login">
                <button class="btn custom-login-btn">Login</button>
              </router-link>
            </li>
            <li class="nav-item ms-2">
              <router-link to="/register">
                <button class="btn custom-register-btn">Registrieren</button>
              </router-link>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

.navbar {
  height: 100px;
  padding: 0 1rem;
}

.navbar .container-fluid{
  display: flex;
  align-items: center;
  height: 100%;
}

.bg-custom {
  background-color: #E4E2DD !important;
}

.nav-link{
  color: #181818 !important;
}

.nav-link:hover{
  color: #f8f8f8 !important;
}

.custom-login-btn{
  background-color: #684e45;
  border-color: #75524b;
  color: white;
}

.custom-login-btn:hover{
  background-color: #805d4d;
  border-color: #805d4d;
  color: white;
}

.custom-register-btn{
  background-color: #9c3b20;
  border-color: #9c3b20;
  color: white;
}

.custom-register-btn:hover{
  background-color: #bf4d2f;
  border-color: #bf4d2f;
  color: white;
}

.ms-2{
  margin-left: 0.5rem;
}

</style>