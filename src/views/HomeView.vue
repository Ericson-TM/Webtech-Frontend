<template>
  <!-- Main Content -->
  <div>
    <section id="main-content" class="container-fluid p-0 vh-100">
      <div class="text-center bg-image"
           style="background-image: url('src/components/images/Running_HomePage.jpg'); height: 100%; background-size: cover; background-position: center;">
        <div class="mask d-flex justify-content-center align-items-center h-100" style="background-color: rgba(0, 0, 0, 0.4);">
          <div class="text-white text-center">
            <h1 class="mb-3">Willkommen bei Night Club!!</h1>
            <h4 class="mb-3">Hier finden Sie mehr über unsere Trainingspläne</h4>
            <a class="btn btn-outline-light btn-lg" href="/trainingsplaene" role="button">Mehr erfahren</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Placeholder Section -->
    <div class="seperator my-5 d-flex justify-content-center align-items-center">
      <hr class="flex-grow-1 mx-3">
    </div>


    <!-- Service Section -->
    <section class="container py-5">
      <h2 class="text-center mb-4">Alles zum Thema Laufen</h2>
      <div class="row">
        <!-- Laufen -->
        <div class="col-md-4">
          <div class="card">
            <img src="@/components/images/Lauftraining.png" class="card-img-top" alt="Laufen">
            <div class="card-body">
              <h5 class="card-title">Laufen</h5>
              <p class="card-text">Hier findest du Informationen und Tipps rund ums Thema Laufen. Möchtest du dich auf einen Halbmarathon vorbereiten oder einfach nur etwas über Lauftechniken lernen? Dann klicke hier!</p>
              <a href="https://www.lauftraining.com/" class="btn btn-dark">Mehr erfahren</a>
            </div>
          </div>
        </div>
        <!-- Halbmarathon -->
        <div class="col-md-4">
          <div class="card">
            <img src="@/components/images/Halbmarathon.png" class="card-img-top" alt="Halbmarathon">
            <div class="card-body">
              <h5 class="card-title">Halbmarathon</h5>
              <p class="card-text">Hier findest du alle kommenden Veranstaltungen in Deutschland. Falls du Sport gleich mit Urlaub verbinden möchtest kannst du dort auch nach internationalen Veranstaltungen suchen.</p>
              <a href="https://www.marathon.de/deutschland" class="btn btn-dark">Mehr erfahren</a>
            </div>
          </div>
        </div>
        <!-- Marathon -->
        <div class="col-md-4">
          <div class="card">
            <img src="@/components/images/Marathon.png" class="card-img-top" alt="Marathon">
            <div class="card-body">
              <h5 class="card-title">Marathon</h5>
              <p class="card-text">Hier findest du alle kommenden Veranstaltungen in Deutschland. Falls du Sport gleich mit Urlaub verbinden möchtest kannst du dort auch nach internationalen Veranstaltungen suchen.</p>
              <a href="https://www.marathon.de/deutschland" class="btn btn-dark">Mehr erfahren</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Placeholder Section -->
    <div class="seperator my-5 d-flex justify-content-center align-items-center">
      <hr class="flex-grow-1 mx-3">
    </div>

    <!-- Introduction Section -->
    <div class="container team-section">
      <h2 class="text-center mb-4">Über uns</h2>
      <p class="text-center">Wir sind zwei Studenten der HTW Berlin und haben diese Webseite im Rahmen eines Projekts im Kurs Webtechnologien erstellt.</p>
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <img src="@/components/images/Profilbild%20transparent.png" alt="Eric Lieberwirth">
              <div>
                <h5 class="card-title">Eric Lieberwirth</h5>
                <p class="card-text">HTW Berlin</p>
                <p class="card-text">Studiert Wirtschaftsinformatik</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <img src="@/components/images/Profilbild%20transparent.png" alt="Cesar Vistel">
              <div>
                <h5 class="card-title">Cesar Vistel</h5>
                <p class="card-text">HTW Berlin</p>
                <p class="card-text">Studiert Wirtschaftsinformatik</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.team-section{
  text-align: center;
  padding: 50px 0;

  .card{
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .card-body{
    display: flex;
    align-items: center;
  }
  .card-body img{
    border-radius: 50%;
    width: 120px;
    margin-right: 20px;
    border: 5px solid #fff;
  }
  .card-title{
    font-size: 24px;
    color: #333;
  }
  .card h5{
    font-size: 24px;
    color: #333;
  }

  .card p{
    font-size: 18px;
    color: #777;
  }
}


.bg-image {
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Macht das Hintergrundbild so groß wie die gesamte Höhe des Ansichtsfensters */
}

.mask {
  width: 100%;
  height: 100%;
}

.card-img-top {
  height: 300px;
  object-fit: contain;
}

#main-content {
  height: 100vh; /* Macht die Hauptsektion so groß wie die gesamte Höhe des Ansichtsfensters */
}


</style>
<script setup lang="ts">
</script>