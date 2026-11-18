<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Home',
      icon: 'i-lucide-box',
      to: '/'
    },
    {
      label: 'Cats',
      icon: 'i-lucide-box',
      to: '/cats'
    },
    {
      label: 'Kittens',
      icon: 'i-lucide-box',
      to: '/kittens',
    },
    {
      label: 'Felix',
      icon: 'i-lucide-box',
      to: '/kittens/felix',
    },
    {
      label: 'any cat name',
      icon: 'i-lucide-box',
      to: '/kittens/anycatnamehere',
    }
  ]
])
</script>

<template>
  <UApp>
    <UNavigationMenu color="neutral" variant="link" :items="items" class="w-full" />
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </UApp>
</template>
