<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/utils/cn'

const props = defineProps<{
  orientation?: 'horizontal' | 'vertical'
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Separator
    data-slot="button-group-separator"
    :orientation="orientation || 'vertical'"
    :class="cn(
      'bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto',
      props.class,
    )"
  />
</template>
