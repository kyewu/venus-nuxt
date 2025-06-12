<script setup lang="ts">
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

defineProps<ItemsType>()

const { width } = useWindowSize()

interface ItemsType {
  items: string[]
}

const modules = ref([Pagination, FreeMode])
</script>

<template>
  <Swiper
    :modules="modules"
    :slides-per-view="width > 640 ? (width < 800 ? 3 : 4) : 2"
    :free-mode="true"
    :space-between="50"
    :pagination="{ clickable: true }"
    loop
    v-bind="$attrs"
  >
    <SwiperSlide v-for="(item, index) in items" :key="index" class="py-10">
      <div class="px-2 lt-sm:h-20 sm:h-36 w-full bg-gray-100">
        <div
          class="h-full w-full bg-no-repeat bg-contain bg-center"
          :style="{
            'background-image': `url('${item}')`,
          }"
        />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped></style>
