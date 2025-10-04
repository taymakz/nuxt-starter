<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const props = withDefaults(defineProps<{
  variant?: 'default' | 'icon'
  class?: HTMLAttributes['class']
}>(), {
  variant: 'default',
})

const emptyMediaVariants = cva(
  'flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: 'bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*=size-])]:size-6',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
</script>

<template>
  <div
    data-slot="empty-icon"
    :data-variant="variant"
    :class="cn(emptyMediaVariants({ variant }), props.class)"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
