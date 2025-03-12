<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'

interface Contribution {
  id: string | null;
  date: string | null;
  level: string | null;
}

interface ContributionToolTip {
  forAttribute: string | null;
  text: string | null;
}

type WeekSchedule = {
  sunday: Contribution[];
  monday: Contribution[];
  tuesday: Contribution[];
  wednesday: Contribution[];
  thursday: Contribution[];
  friday: Contribution[];
  saturday: Contribution[];
};

interface ContributionCalendar {
  contributionCalenderWeekChunks: WeekSchedule;
  contributionToolTips: ContributionToolTip[];
}

const contribution = ref({})

const fetchData = async () => {
  const res = await fetch('http://localhost:3000/GitHubContributions', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  })

  console.log(res.status)

  const {
    contributionToolTips,
    contributionCalenderWeekChunks
  } = await res.json()

  contribution.value = { contributionToolTips, contributionCalenderWeekChunks } as ContributionCalendar

  return contribution.value
}

const initializeTooltips = () => {
  nextTick(() => {
    contribution.value.contributionToolTips.forEach(obj => {
      const targetElement = document.getElementById(obj?.forAttribute)
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

watch(contribution, () => {
  initializeTooltips()
})
</script>

<template>
  <div class="container mt-5">
    <table class="table-container">
      <tbody>
        <template v-for="(contributions, week) in contribution.contributionCalenderWeekChunks">
          <tr style="height: 10px!important;">
<!--            <td style="position: relative; text-align: left">-->
<!--              <span style="position: absolute; overflow: hidden">{{week}}</span>-->
<!--            </td>-->
            <template v-for="(day, dayIndex) in contributions">
              <td :id="day.id" :class="'level-' + day.level" class="contribution-day">
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
$color-level-1: #0e4429;
$color-level-2: #006d32;
$color-level-3: #39d353;
$color-level-4: #26a641;

.table-container {
  table-layout: fixed;
  background-color: white;
  border-spacing: 3px;
  border-collapse: separate;
  overflow-x: auto;
}

.contribution-day {
  border-radius: 2px;
  background-color: #161b22;
  opacity: 0.85;
  width: 10px !important;
  min-width: 10px !important;
  max-width: 10px !important;
  height: 10px !important;
  min-height: 10px !important;
  max-height: 10px !important;
  overflow: auto;
}

td {
  white-space: nowrap;
}
.level-1 {
  background-color: $color-level-1;
  outline: rgba(255, 255, 255, 0.05);
}

.level-2 {
  background-color: $color-level-2;
  outline: rgba(255, 255, 255, 0.05);
}

.level-3 {
  background-color: $color-level-3;
  outline: rgba(255, 255, 255, 0.05);
}

.level-4 {
  background-color: $color-level-4;
  outline: rgba(255, 255, 255, 0.05);
}

</style>
