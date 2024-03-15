<script setup>
defineProps(["title", "imageLink"]);
</script>

<template>
  <div class="card">
    <h1>{{ title }}</h1>
    <div class="Image" :style="{ backgroundImage: `url(${imageLink})` }"></div>
  </div>
</template>

<style scoped>
h1 {
  color: white;
}

.Image {
  background-size: cover;
  background-position: center;
  width: 25%;
  height: 300px;
  border-radius: 30px;
}
</style>
