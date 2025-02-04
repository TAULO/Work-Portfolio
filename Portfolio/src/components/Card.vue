<script setup lang="ts">

</script>

<template>

  <div class="card">
    <div class="card-shadow"></div>
    <div class="card-body">TODO</div>
  </div>

</template>

<style scoped>

.card {
  background-color: rgb(255 244 218);
  border: 3px solid black;

  position: relative;

  width: 600px;
  height: 200px;

  border-radius: 0.75rem;
}

.card-body {
  display: flex;
  padding: 2rem 4rem;
}

.card-shadow {
  background-color: black;
  width: inherit;
  height: inherit;
  border-radius: inherit;

  transform: translate(0.5rem, 0.5rem);

  position: absolute;
  z-index: -1;
}

</style>
