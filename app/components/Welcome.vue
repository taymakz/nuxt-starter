<script setup lang="ts">
import { toast } from 'vue-sonner'
import Button from './ui/button/Button.vue'

const usedTools = [
  { title: 'Tailwindv4', link: 'https://tailwindcss.com/' },
  { title: 'Shadcn', link: 'https://www.shadcn-vue.com/' },
  { title: 'Motion-v', link: 'https://motion.seacoly.me/' },
  { title: 'Dayjs', link: 'https://day.js.org/' },
  { title: 'Lucide-Phosphor Icons', link: 'https://icones.js.org/' },
]
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center ">
    <div class="flex flex-col justify-center items-center gap-2">
  
      <h1 class="text-clamp-xl text-transparent bg-clip-text animate-gradient-text uppercase">
        Nuxt Starter سلام
      </h1>

      <div dir="ltr" class="text-foreground-muted  flex flex-wrap gap-4">
        <NuxtLink
          v-for="(item, index) in usedTools" :key="index" external target="_blank" :to="item.link"
          class="text-foreground-muted link text-sm"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-center mt-4 gap-1">
      <Button class="border py-2 px-4" @click="toast.success('سلام حالت جطوره')">
        success
      </Button>
      <Button class="border py-2 px-4" @click="toast.error('سلام حالت جطوره')">
        error
      </Button>
      <Button class="border py-2 px-4" @click="toast.warning('سلام حالت جطوره')">
        warning
      </Button>
      <Button class="border py-2 px-4" @click="toast.info('سلام حالت جطوره')">
        info
      </Button>
      <Button class="border py-2 px-4" @click="toast('سلام حالت جطوره')">
        default
      </Button>
    </div>
  </div>
</template>

<style scoped>
@keyframes gradient-move {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-text {
  background-image: linear-gradient(to right, #ec4899, #8b5cf6);
  background-size: 200% 200%;
  animation: gradient-move 3s infinite;
}
</style>
