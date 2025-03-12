<script setup lang="ts">
import Card from '@/components/Card.vue'
import Button from './components/Button.vue'
import Input from './components/Input.vue'
import GitHubContributions from '@/components/GitHubContributions.vue'
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <Card></Card>
      </div>
    </div>
    <div class="row mt-5 justify-content-center">
      <div class="col-6">
        <Input></Input>
      </div>
      <div class="col-auto">
        <Button></Button>
      </div>
    </div>
    <GitHubContributions></GitHubContributions>
  </div>

</template>

<style scoped lang="scss">

</style>
