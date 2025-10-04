<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cva } from 'class-variance-authority'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/cn'

const props = withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset'
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'icon-xs' | 'icon-sm'
  class?: HTMLAttributes['class']
}>(), {
  type: 'button',
  variant: 'ghost',
  size: 'xs',
})

const inputGroupButtonVariants = cva(
  'text-sm shadow-none flex gap-2 items-center',
  {
    variants: {
      size: {
        'xs': 'h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*=\'size-\'])]:size-3.5 has-[>svg]:px-2',
        'sm': 'h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5',
        'icon-xs':
          'size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0',
        'icon-sm': 'size-8 p-0  has-[>svg]:p-0',
      },
    },
    defaultVariants: {
      size: 'xs',
    },
  },
)
</script>

<template>
  <Button
    :type="type"
    :variant="variant"
    :data-size="size"
    :class="cn(inputGroupButtonVariants({ size }), props.class)"
  >
    <slot />
  </Button>
</template>
