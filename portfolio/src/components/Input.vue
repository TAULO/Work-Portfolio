<script setup lang="ts">

</script>

<template>
  <div class="custom-input-container">
    <div class="custom-input-shadow"></div>
    <input class="custom-input text-center text-md-start ps-md-4" placeholder="test.test@test.test"></input>
  </div>
</template>

<style scoped lang="scss">

$input-shadow-size: .2rem;

.custom-input-container {
  position: relative;

  width: 100%;
  height: 50px;

  border-radius: .3rem;
}

.custom-input {
  border-radius: inherit;
  height: inherit;
  width: inherit;

  background-color: white;

  box-sizing: border-box;
  outline: none;

  transition: transform 400ms ease-out;

  border: 3px solid black;
}

.custom-input-shadow {
  background-color: black;
  height: inherit;
  width: inherit;
  border-radius: inherit;

  transform: translate($input-shadow-size, $input-shadow-size);

  position: absolute;
  z-index: -1;
}

input:focus {
  transform: translate($input-shadow-size, $input-shadow-size);
  z-index: 10;
}

</style>
