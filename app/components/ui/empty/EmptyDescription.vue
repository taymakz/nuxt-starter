<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/cn'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="empty-description"
    :class="cn(
      'text-muted-foreground [&_a:hover]:text-primary text-sm/relaxed [&_a]:underline [&_a]:underline-offset-4',
      props.class,
    )"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
