<script setup lang="ts">
import type { Card } from './types'

const props = defineProps<Card>()

const cardClass = computed(() => {
  let defaultClass = 'flex flex-col w-80'
  if (props.icon) {
    defaultClass += ' items-start p-4'
  }
  if (props.imageType === 'rounded') {
    defaultClass += ' rounded overflow-hidden'
  }
  else if (props.imageType === 'avatar') {
    defaultClass += ` relative mt-10`
  }
  if (props.border) {
    defaultClass += ` border-1 border-gray-300`
  }
  return defaultClass
})

const imageClass = computed(() => {
  const defaultClass = 'bg-image'
  if (!props.title && !props.subTitle && props.imageType === 'rounded') {
    return `${defaultClass} h-60 rounded`
  }
  else if (props.imageType === 'avatar') {
    return `${defaultClass} w-20 h-20 rounded-1/2 self-center absolute top-0 translate-y--50% z-2`
  }
  return `${defaultClass} h-40`
})

const titleClass = computed(() => {
  const defaultClass = 'flex flex-col items-start p-4'
  if (props.imageType === 'avatar') {
    return `${defaultClass} pt-15`
  }
  return defaultClass
})
</script>

<template>
  <div :class="cardClass">
    <header v-if="image" :class="imageClass" class="bg-image" :style="{ 'background-image': `url(${image})` }" />
    <header v-else class="text-5xl" :class="[icon]" />
    <div v-if="title || subTitle" class="title-wrapper" :class="[titleClass]">
      <p v-if="title" class="text-lg text-dark-300 text-bold pb-2">
        {{ title }}
      </p>
      <p v-if="subTitle" class="text-sm text-dark-300 font-300">
        {{ subTitle }}
      </p>
    </div>
    <footer>
      <slot :item="props" />
    </footer>
  </div>
</template>

<style scoped lang="scss">

</style>
