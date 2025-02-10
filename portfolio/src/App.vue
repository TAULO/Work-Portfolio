<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'

import Card from '@/components/Card.vue'
import Button from './components/Button.vue'
import Input from './components/Input.vue'

const data = ref(null)

const fetchData = async () => {
  const res = await fetch('http://localhost:3000/GitHubContributions', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  })

  const {
    contributionCalender,
    contributionToolTips,
    contributionCalenderChunks
  } = await res.json()
  data.value = { contributionCalender, contributionToolTips, contributionCalenderChunks }

}

const initializeTooltips = () => {
  nextTick(() => {
    data.value?.contributionToolTips.forEach(obj => {
      const targetElement = document.getElementById(obj.forAttribute)
      if (targetElement) {
        new bootstrap.Tooltip(targetElement, {
          title: obj.text,
          placement: 'top',
          trigger: 'hover'
        })
      }
    })
  })
}


onMounted(() => {
  fetchData()
})

watch(data, () => {
  initializeTooltips()
})
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
  </div>

  <!-- CONTRIBUTION CALENDAR PROTOTYPING -->
  <div class="container-fluid mt-5">
    <template v-for="(contribution, index) in data?.contributionCalenderChunks">
      <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between">
        {{ index }}
        <template v-for="(data, index) in contribution">
          <div :id="data.id" :class="'class_' + data.level" style="width: 5px; height: 5px;"></div>
        </template>
      </div>
    </template>
  </div>


</template>

<style scoped lang="scss">
$color-level-1: #0e4429;
$color-level-2: #006d32;
$color-level-3: #39d353;
$color-level-4: #26a641;

.class_0 {
}

.class_1 {
  background-color: $color-level-1;
}

.class_2 {
  background-color: $color-level-2;

}

.class_3 {
  background-color: $color-level-3;

}

.class_4 {
  background-color: $color-level-4;

}
</style>
