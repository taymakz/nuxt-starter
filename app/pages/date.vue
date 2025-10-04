<script setup lang="ts">
// Reactive data
const persianWeekName = getPersianWeekName()
const currentTime = getCurrentTime()
const currentDatePersian = getCurrentDatePersian()
const currentYearPersian = getCurrentYearPersian()
const persianDateDiffValue = persianDateDiff('1404/01/01', '1404/01/10')
const persianWeekDayFromDays = getPersianWeekDayFromDays(5)
const remainDays = JSON.stringify(remainDayForSubscription(new Date(Date.now() + 86400000)), null, 2) // 1 day from now
const formattedDateTime = formatPersianDateTime(new Date())
</script>

<template>
  <div class="p-8 space-y-4">
    <h1 class="text-3xl font-bold mb-6">
      Persian Date Utilities Demo
    </h1>

    <div class="space-y-2">
      <p><strong>persianWeekDays:</strong> {{ persianWeekDays }}</p>
    </div>

    <div class="space-y-2">
      <p><strong>getPersianWeekName():</strong> {{ persianWeekName }}</p>
    </div>

    <div class="space-y-2">
      <p><strong>getCurrentTime():</strong> {{ currentTime }}</p>
    </div>

    <div class="space-y-2">
      <p><strong>getCurrentDatePersian():</strong> {{ currentDatePersian }}</p>
    </div>

    <div class="space-y-2">
      <p><strong>getCurrentYearPersian():</strong> {{ currentYearPersian }}</p>
    </div>

    <div class="space-y-2">
      <p><strong>persianDateDiff('1404/01/01', '1404/01/10'):</strong> {{ persianDateDiffValue }}</p>
    </div>

    <div class="space-y-2">
      <p><strong>getPersianWeekDayFromDays(5):</strong> {{ persianWeekDayFromDays }}</p>
    </div>

    <div class="space-y-2">
      <p><strong>remainDayForSubscription(tomorrow):</strong> {{ remainDays }}</p>
    </div>

    <div class="space-y-2">
      <p><strong>formatPersianDateTime(new Date()):</strong> {{ formattedDateTime }}</p>
    </div>
  </div>
</template>
