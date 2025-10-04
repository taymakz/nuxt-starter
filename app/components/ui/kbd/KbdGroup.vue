<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/cn'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <kbd
    data-slot="kbd-group"
    :class="cn('inline-flex items-center gap-1', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </kbd>
</template>
