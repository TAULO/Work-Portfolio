<script setup lang="ts">

</script>

<template>
  <div class="input-container">
    <div class="input-shadow"></div>
    <input class="input" placeholder="test.test@test.test"></input>
  </div>
</template>

<style scoped>

.input-container {
  position: relative;

  height: 50px;
  width: 500px;

  border-radius: 0.3rem;
}

.input {
  border-radius: inherit;
  height: inherit;
  width: inherit;

  background-color: white;

  box-sizing: border-box;
  outline: none;

  padding-left: 1.5rem;

  border: 3px solid black;
}

.input-shadow {
  background-color: black;
  height: inherit;
  width: inherit;
  border-radius: inherit;

  transform: translate(0.2rem, 0.2rem);

  position: absolute;
  z-index: -1;
}

</style>
