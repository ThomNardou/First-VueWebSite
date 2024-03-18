<script setup>
import ForestCard from "./components/ForestCard.vue";
import { ref } from "vue";
import axios from "axios";
import { createApp } from "vue";
</script>

<template>
  <body>
    <audio src="/bgMusic.mp3" loop></audio>
    <img
      src="/border.png"
      class="border"
      id="border"
      ondragstart="return false"
      ondrop="return false"
    />
    <header>
      <h1>Welcome in the forest WebSite</h1>
    </header>
    <ForestCard title="Amazonie" imageLink="/amazonie.jpg" />

    <div class="target" id="apiResult" v-for="apiResult in result">
      <p>{{ apiResult.title }}</p></br>
      <p>{{ apiResult.excerpt }}</p>
    </div>
  </body>
</template>

<script>
window.addEventListener("scroll", () => {
  const border = document.getElementById("border");
  if (window.scrollY < 1000) {
    border.style.width = `calc(100vh - ${window.scrollY}px)`;
    border.style.opacity = 1 - window.scrollY / 1000;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.querySelector("audio");
  // audio.play();
  // audio.volume = 0.1;
});

export default {
  data() {
    return {
      result: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      axios
        .get("http://localhost:3000/api/books", {
          headers: {
            'access-control-allow-origin': '*',
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxMDI0NDMxNCwiZXhwIjoxNzQxODAxOTE0fQ.-pXDk9W5yDdpirheK-9lhZtjXDkcAEj_EYyVWR9Z1L4",
          },
        })
        .then((response) => {
          this.result = response.data.data.rows;
          console.log(response.data.data.rows);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
@font-face {
  font-family: mainFont;
  src: url(/font/GrowWestRegular-vm1qA.ttf);
}

html,
body {
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
  width: 100%;
  height: 300px;
  margin: 300px auto 500px auto;
  background-color: #43b883;
  border-radius: 10px;
  font-weight: bold;
  display: grid;
  align-items: center;
}
</style>
