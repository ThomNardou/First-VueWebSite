<script setup>

const sayCoucou = () => {
  console.log('coucou');
}
</script>

<template>
  <body>
    <img src="/border.png" class="border">
    <header>
      <h1 v-on:scroll="sayCoucou">Welcome in the forest WebSite</h1>
    </header>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
    <div class="target">1</div>
  </body>
</template>

<style>

@font-face {
  font-family: mainFont;
  src: url(/font/GrowWestRegular-vm1qA.ttf);
}

html, body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: black;
}

header {
  height: calc(100vh + 100px);
  background-image: url("/background.jpg");
  background-size: cover;
  background: linear-gradient(url("/background.jpg"), 0);
}

header h1 {
  font-family: mainFont;
  font-size: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  user-select: none;
}

.border {
  width: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  user-select: none;
}

.target {
  width: 100px;
  height: 100px;
  margin: 300px auto 500px auto;
  display: flex;
  align-items: center;
  background-color: #43b883;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
}
</style>
