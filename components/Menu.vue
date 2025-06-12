<script setup lang="ts">

</script>

<template>
  <nav class="flex flex-items-center flex-nowrap">
    <router-link to="/" class="item">
      Home
    </router-link>
    <router-link to="/study" class="item">
      Study
    </router-link>
    <router-link to="/about" class="item">
      About
    </router-link>
    <a href="https://github.com/venus-ui" class="item">Community</a>
  </nav>
</template>

<style scoped lang="scss">
.item {
  @apply relative text-white text-xl px-8 py-2 cursor-pointer font-300 lt-sm:self-start;
  &:hover {
    @apply font-500;
    &:after {
      @apply content-[''] absolute bottom-0 h-1 w-8 bg-gray-100 left-[calc(50%-1rem)];
    }
  }
}
</style>
