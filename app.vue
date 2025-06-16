<script setup lang="ts">
import { useThemeStore } from '~/stores/useThemeStore'

onBeforeMount(() => {
  useResizeObserver(document.body, () => {
    const themeStore = useThemeStore()
    const { width } = useWindowSize()
    const contentWidth = 1200
    themeStore.$patch({
      rate: width.value < 1200 ? +(width.value / contentWidth).toFixed(2) : 1,
    })
  })
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use '~/assets/main.scss';
</style>
