<template>
  <div class="about">
    <div class="content">

      <h1>About This Application</h1>
      <p>
        Welcome to our application! This tool is designed to help you create
        personalized training plans for half marathons and full marathons. Whether
        you're a beginner or an experienced runner, our app provides tailored plans
        to help you achieve your running goals.
      </p>
    </div>
  </div>
</template>

<style>
.about {
  padding: 20px;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.content {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 800px;
}

.about-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}

.about h1 {
  color: #333;
  margin-bottom: 20px;
}

.about p {
  color: #555;
  line-height: 1.6;
}

@media (min-width: 1024px) {
  .about {
    padding: 40px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about p {
    max-width: 600px;
  }
}
</style>


