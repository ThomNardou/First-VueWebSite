<script setup>
import ForestCard from "./components/ForestCard.vue";
import { ref } from "vue";
import axios from "axios";
import { createApp } from "vue";
</script>

<template>
  <body>
    <audio src="/bgMusic.mp3" loop></audio>
    <header>
      <h1>Coucou</h1>
    </header>
      <img
        src="/door.png"
        class="door"
        id="door"
        ondragstart="return false"
        ondrop="return false"
      />
    <ForestCard title="Amazonie" imageLink="/amazonie.jpg" />

    <div class="target" id="apiResult" v-for="apiResult in result">
      <p>{{ apiResult.title }}</p></br>
      <p>{{ apiResult.excerpt }}</p>
    </div>
  </body>
</template>

<script>

function scrollPage() {
  window.scrollBy({
  top: 1000,
  left: 1000,
  behavior: "smooth",
});
}

setTimeout(scrollPage, 10)

window.addEventListener("scroll", () => {
  const border = document.getElementById("door");
  const header = document.querySelector("header");

  let width = border.style.width = `calc(75vh + ${window.scrollY}px * 10)`;

  border.style.marginLeft = `calc(${width} / -2)`;
  border.style.opacity = 1 - window.scrollY / 1000;
  
  let translateY = window.scrollY * 4;

  border.style.transform = `translateY(-${translateY}px)`;


  if (window.scrollY <= 300) {
    header.style.filter = "grayscale(100%)";
    header.style.transition = ".35s";
  }
  else {
    header.style.transition = ".35s";
    header.style.filter = "grayscale(0%)";
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
  overflow-x: hidden;
}

header {
  padding-top: 100px;
  height: 200vh;
  background-image: url("/wallpaper_one.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

header:not(:first-child) {
  filter: grayscale(100%);
}

.door {
  width: 75vh;
  position: fixed;
  top: calc(100vh - 75vh);
  left: 50%;
  right: 50%;
  margin-left: -37.5vh;
  user-select: none;
  z-index: 1;
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
