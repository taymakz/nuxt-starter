<script setup lang="ts">
</script>

<template>
  <div class="container py-10 max-w-screen-md">
    <div class="flex gap-6 mb-10">
      <NuxtLink class="text-muted-foreground hover:text-foreground duration-200" to="/components">
        Components
      </NuxtLink>
      <NuxtLink class="text-muted-foreground hover:text-foreground duration-200" to="/date">
        Date Utils
      </NuxtLink>
    </div>
    <slot />
  </div>
</template>
