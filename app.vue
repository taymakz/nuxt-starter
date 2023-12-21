<script setup lang="ts">
useHead({
  title: 'Nuxt Starter',
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :size="3" />
    <NuxtPage />
    <UNotifications />
  </NuxtLayout>
</template>

<style>
.dark{
  color-scheme: dark;
}
</style>
