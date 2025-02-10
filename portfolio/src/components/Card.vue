<script setup lang="ts"></script>

<template>

  <div class="custom-card container">
    <div class="custom-card-shadow"></div>
    <div class="custom-card-body">
    </div>
  </div>

</template>

<style scoped>

.custom-card {
  background-color: rgb(255 244 218);
  border: 3px solid black;

  padding: 0;
  margin: 0;

  position: relative;

  width: 100%;
  height: 100%;

  border-radius: 0.75rem;
}

.custom-card-shadow {
  background-color: black;

  width: inherit;
  height: inherit;
  border-radius: inherit;

  transform: translate(0.7rem, 0.7rem);

  position: absolute;
  z-index: -20;
}

.custom-card-body {
  position: relative;
  display: flex;
  padding: 2rem 4rem;
  z-index: 5;
}

</style>
