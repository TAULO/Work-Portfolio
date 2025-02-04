<script setup lang="ts">
</script>

<template>
  <div class="custom-button-container">
    <div class="custom-button-shadow"></div>
    <button class="custom-button">TEST</button>
  </div>
</template>

<style scoped lang="scss">

$button-shadow-size: .2rem;

.custom-button-container {
  position: relative;

  height: 50px;
  width: 100px;

  border-radius: .3rem;
}

.custom-button {
  background-color: rgb(255 196 128);
  padding: 0;
  margin: 0;
  height: inherit;
  width: inherit;
  border-radius: inherit;

  transition: transform 400ms ease-out;

  border: 3px solid black;
}

.custom-button-shadow {
  background-color: black;
  height: inherit;
  width: inherit;
  border-radius: inherit;

  transform: translate($button-shadow-size, $button-shadow-size);

  position: absolute;
  z-index: -1;
}

.button:hover {
  cursor: pointer;
  transform: translate($button-shadow-size, $button-shadow-size);
}

.button:active {
  opacity: .9;
}

</style>
