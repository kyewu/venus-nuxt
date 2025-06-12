<script setup lang="ts">
import Container from '~/components/Container.vue'
import Menu from '~/components/Menu.vue'

const { y } = useWindowScroll()
const isScroll = computed(() => {
  return y.value > 0
})

const [show, toggle] = useToggle(false)
const flag = ref(false)

onBeforeMount(() => {
  useResizeObserver(document.body, () => {
    const { width } = useWindowSize()
    if (width.value < 640) {
      if (flag.value) {
        return
      }
      flag.value = false
      toggle(false)
    }
    else {
      toggle(true)
    }
  })
})
</script>

<template>
  <div class="flex flex-col min-h-100vh">
    <nav class="fixed w-full bg-black z-50 top-0 relative h-12 line-height-12 transition-all duration-300"
      :class="[{ 'bg-opacity-30 bg-black shadow-lg': isScroll }, { 'lt-sm:(bg-black h-full)': show }]">
      <Container>
        <div class="text-white h-full lt-sm:(mx-auto)">
          Venus
        </div>
        <div class="hidden text-gray-300 text-2xl absolute right-5 top-3 cursor-pointer hover:text-white lt-sm:block">
          <Transition name="rotate-icon" mode="out-in">
            <i v-if="!show" class="i-mdi-menu" @click="() => toggle()" />
            <i v-else class="i-mdi-close" @click="() => toggle()" />
          </Transition>
        </div>
        <Menu v-show="show" class="lt-sm:(absolute top-14 right-0 w-full flex-col)" />
      </Container>
    </nav>
    <NuxtPage />
    <div class="mobile-hide">
      <DefaultFooter />
    </div>
    <div class="hidden mobile">
      Mobile Footer
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rotate-icon-enter-active {
  animation: scaleYIn 0.3s ease-in-out;
}

.rotate-icon-leave-active {
  animation: scaleYIn 0.3s reverse;
}

@keyframes scaleYIn {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
