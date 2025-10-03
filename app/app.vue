<script setup lang="ts">
import {
  formatPersianDateTime,
  getCurrentDatePersian,
  getCurrentTime,
  getCurrentYearPersian,
  getPersianWeekDayFromDays,
  getPersianWeekName,
  persianDateDiff,
  persianWeekDays,
  remainDayForSubscription,
} from './utils/date'

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
  <div>
    <NuxtRouteAnnouncer />
    <h1>Persian Date Utilities Demo</h1>
    <div>
      <h2>Persian Week Days:</h2>
      <p>{{ persianWeekDays }}</p>
    </div>
    <div>
      <h2>Persian Week Name:</h2>
      <p>{{ persianWeekName }}</p>
    </div>
    <div>
      <h2>Current Time:</h2>
      <p>{{ currentTime }}</p>
    </div>
    <div>
      <h2>Current Date Persian:</h2>
      <p>{{ currentDatePersian }}</p>
    </div>
    <div>
      <h2>Current Year Persian:</h2>
      <p>{{ currentYearPersian }}</p>
    </div>
    <div>
      <h2>Persian Date Diff (1404/01/01 to 1404/01/10):</h2>
      <p>{{ persianDateDiffValue }}</p>
    </div>
    <div>
      <h2>Persian Week Day From Days (5 days from now):</h2>
      <p>{{ persianWeekDayFromDays }}</p>
    </div>
    <div>
      <h2>Remain Days for Subscription:</h2>
      <p>{{ remainDays }}</p>
    </div>
    <div>
      <h2>Format Persian Date Time:</h2>
      <p>{{ formattedDateTime }}</p>
    </div>
  </div>
</template>
