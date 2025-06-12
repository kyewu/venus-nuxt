<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <div class="bg-sky-400 text-gray-200 cursor-pointer" @click="countStore.increment">{{ countStore.count }}</div>
    <!-- <ContentRenderer :value="home"></ContentRenderer> -->
    <!-- <div v-else>Home not found</div> -->
    <p class="text-red">{{ x }}</p>
  </div>
</template>

<script setup lang="ts">
import { useCountStore } from '~/stores/useCount'

// const {data:home} = await useAsyncData(() => queryCollection('content').path('/').first())
// console.log('home:' ,home)
const { x } = useMouse()

// useSeoMeta({
//   title: home.value?.title || 'Home',
//   description: home.value?.description || 'Welcome to the home page',
// })

const countStore = useCountStore()
</script>