<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <h1>404</h1>
  <NuxtRouteAnnouncer />
  <!-- eslint-disable vue/no-multiple-template-root -->
  <button @click="router.back()">
    Back
  </button>
</template>
