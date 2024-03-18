<script setup>
defineProps(["title", "imageLink"]);
</script>

<template>
  <div class="card">
    <div class="Image" :style="{ backgroundImage: `url(${imageLink})` }"></div>
    <div class="text">
      <h1>{{ title }}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 60px 0;
}

.text {
  width: 25%;
}

.text h1 {
  color: #43b883;
}

.text p {
  color: white;
}

.Image {
  background-size: cover;
  background-position: center;
  width: 25%;
  height: 300px;
  border-radius: 30px;
}

.Image:hover {
  transition: .35s;
  box-shadow: 1px -200px 239px -112px rgba(0, 0, 0, 1) inset;
  -webkit-box-shadow: 1px -200px 239px -112px rgba(0, 0, 0, 1) inset;
  -moz-box-shadow: 1px -200px 239px -112px rgba(0, 0, 0, 1) inset;
}

.Image:not(:hover) {
  transition: .35s;
}
</style>
