<script setup lang="ts">
import type { Card, SwiperItemType } from '~/components/types'
import { useHomeStore } from '~/stores/useHomeStore'
import { useThemeStore } from '~/stores/useThemeStore'

const store = useThemeStore()
const homeStore = useHomeStore()
const partners = ref([
  'https://wayearn.static.toimc.com/partner/logo1.png',
  'https://wayearn.static.toimc.com/partner/logo2.png',
  'https://wayearn.static.toimc.com/partner/logo8.png',
  'https://wayearn.static.toimc.com/partner/logo5.png',
  'https://wayearn.static.toimc.com/partner/logo6.png',
  'https://wayearn.static.toimc.com/partner/logo7.png',
])
const selectedItem: Ref<SwiperItemType> = ref({} as SwiperItemType)

await homeStore.fetchData()
selectedItem.value = homeStore['swiper-projects'][0]

// useAsyncData(async () => {
//   await homeStore.fetchData()
//   // eslint-disable-next-line ts/no-use-before-define
//   selectedItem.value = homeStore['swiper-projects'][0]
// })

onMounted(() => {
  // useRegisterSW({
  //   immediate: true,
  //   onRegisteredSW(swScriptUrl, registration) {
  //     setInterval(() => {
  //       if (registration) {
  //         registration.update()
  //       }
  //     }, 5000)
  //   },
  // })
})

function onActiveIndexChange(index: number) {
  selectedItem.value = homeStore['swiper-projects'][index]
}
</script>

<template>
  <Swiper :items="homeStore.swiperLists" :height="`${store.rate * 36}rem`" />
  <!-- title -->
  <Container>
    <!-- 标题 -->
    <div class="p-4">
      <div class="text-2xl">
        “
      </div>
      <div class="text-2xl font-bold pb-4">
        传播技术的种子 让分享带来价值
      </div>
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-400 w-2/3">
          多年来，toimc技术不忘初心，以建立行业服务标杆为目标，不断提升技术设计服务水平，帮助客户在互联网推广自己的产品、服务和品牌，为客户创造价值从而实现自身价值！
        </div>
        <div class="flex pl-20 w-1/3 justify-end items-center">
          <div class="w-1/2 h-[1px] bg-gray-500"></div>
          <div class="text-2xl relative ml-2 top-1">
            ”
          </div>
        </div>
      </div>
    </div>
  </Container>
  <!-- card -->
  <Container class="p-4">
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full lt-sm:px-4">
      <a
        v-for="(card, index) in homeStore.projects"
        :key="index" class="flex group transition-all shadow-lg hover:(bg-sky-500 shadow-lg text-white transform-translate-y--1)" :href="card.url" target="_blank"
      >
        <Card v-bind="card" class="w-full rounded-0 card" :border="true" image-type="rounded">
          <template #default>
            <div class="flex flex-row items-center justify-between text-gray-500 mb-4 mx-4">
              <span>查看更多</span>
              <i class="i-mdi-arrow-right-thin text-3xl" />
            </div>
          </template>
        </Card>
      </a>
    </div>
  </Container>

  <!-- Official Course -->
  <!-- title -->
  <Container class="mt-5">
    <div class="p-4">
      <div class="text-2xl font-bold pb-4">
        官方课程
      </div>
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-400">
          toimc官方出品，经典内容设计，匠心细致，专业讲解。
        </div>
      </div>
    </div>
  </Container>
  <!-- card -->
  <Container class="p-4">
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full lt-sm:px-4">
      <a
        v-for="(card, index) in homeStore.courses" :key="index" class="['group','hover:( shadow-2xl transform-all transform-translate-y--5)']"
        :href="card.url" target="_blank"
      >
        <Card
          v-bind="card" class="w-full rounded-3 shadow-lg transition-all hover:(transform-translate-y--1 shadow-lg)"
          image-type="rounded"
        >
          <template #default>
            <div class="flex flex-row items-center justify-between text-gray-500 mb-4 mx-4">
              <span>查看更多</span>
              <i class="i-mdi-arrow-right-thin text-3xl" />
            </div>
          </template>
        </Card>
      </a>
    </div>
  </Container>

  <Container class="mt-5">
    <div class="p-4">
      <div class="text-2xl font-bold pb-4">
        课程项目展示
      </div>
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-400">
          项目及架构展示，核心主流技术
        </div>
      </div>
    </div>
  </Container>
  <Container class="w-full text-gray-400 p-4">
    <Swiper
      class="w-2/3" :items="homeStore['swiper-projects']" :height="`${store.rate * 28}rem`"
      @change="onActiveIndexChange"
    />
    <div class="w-1/3 bg-coolgray-700 self-stretch flex flex-col justify-center px-4">
      <div class="text-2xl font-bold pb-4 text-gray-100">
        {{ selectedItem?.title }}
      </div>
      <div class="text-sm">
        {{ selectedItem?.subTitle }}
      </div>
      <div class="flex items-center justify-between mb-4">
        查看更多
      </div>
      <div class="i-mdi-arrow-right-thin text-4xl" />
    </div>
  </Container>

  <Container>
    <div class="text-2xl font-bold mt-8 p-4">
      合作伙伴
    </div>
  </Container>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <Container>
    <FreeSwiper :items="partners" />
  </Container>
</template>

<style lang="scss" scoped>
:deep(.card) {
  &:hover {

    div,
    p,
    .icon {
      @apply text-white
    }
  }
}
</style>
