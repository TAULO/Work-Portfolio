<script setup lang="ts">

</script>

<template>
  <div class="button-container">
    <div class="button-shadow"></div>
    <button class="button">TEST</button>
  </div>
</template>

<style scoped>

.button-container {
  position: relative;

  height: 50px;
  width: 100px;

  border-radius: 0.3rem;
}

.button {
  background-color: rgb(255 196 128);
  padding: 0;
  margin: 0;
  height: inherit;
  width: inherit;
  border-radius: inherit;

  border: 3px solid black;
}

.button-shadow {
  background-color: black;
  height: inherit;
  width: inherit;
  border-radius: inherit;

  transform: translate(0.2rem, 0.2rem);

  position: absolute;
  z-index: -1;
}

.button:hover {
  cursor: pointer;
}

</style>
