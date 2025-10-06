<script setup lang="ts"></script>

<template>
  <div class="container max-w-screen-md py-10">
    <div class="mb-10 flex gap-6">
      <NuxtLink
        class="text-muted-foreground hover:text-foreground duration-200"
        to="/components"
      >
        Components
      </NuxtLink>
      <NuxtLink
        class="text-muted-foreground hover:text-foreground duration-200"
        to="/date"
      >
        Date Utils
      </NuxtLink>
    </div>
    <slot />
  </div>
</template>
