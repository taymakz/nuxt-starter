<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import { useTextDirection } from '@vueuse/core'
import { ConfigProvider } from 'reka-ui'
import { appDesktopStartMinWidth } from './constants'

const textDirection = useTextDirection({ initialValue: 'rtl' })
const dir = computed(() => textDirection.value === 'rtl' ? 'rtl' : 'ltr')
const color = useColorMode()
const isDesktop = useMediaQuery(appDesktopStartMinWidth)

useHead({
  bodyAttrs: {
    class: 'theme-violet',
  },
})
</script>

<template>
  <ConfigProvider :dir="dir">
    <div>
      <NuxtLayout>
        <NuxtLoadingIndicator :size="3" />
        <div>
          <NuxtPage />
        </div>
      </NuxtLayout>
      <!-- Toast -->
      <div class="fixed z-50">
        <ClientOnly>
          <Toaster
            :theme="(color.value as 'dark') || 'light'"
            :position="!isDesktop ? 'top-center' : dir === 'rtl' ? 'bottom-left' : 'bottom-right'"
            close-button
            rich-colors
            :toast-options="{
              style: {
                padding: '24px 32px',
                fontSize: '14px',
                fontFamily: 'IRANYekan',
              },
              duration: 5000,
            }"
          />
        </ClientOnly>
      </div>
    </div>
  </ConfigProvider>
</template>

<style>
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
