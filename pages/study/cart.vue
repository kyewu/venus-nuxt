<script setup lang="ts">
import bg from 'public/assets/images/bg.png'

withDefaults(defineProps<CartType>(), {
  courses: () => [
    {
      image: bg,
      teacher: 'Kye',
      tag: '前端',
      count: 1000,
      progress: '06/08',
      price: '1099.00',
      title: '大前端高级前端工程师',
    },
  ],
})

const show = ref(false)

interface CartItemType {
  image: string
  teacher: string
  tag: string
  count: number
  progress: string
  price: string
  title: string
}

interface CartType {
  courses: CartItemType[]
}

const [flag, toggle] = useToggle(false)
</script>

<template>
  <div class="my-4 relative mx-2 bg-gray-100 flex-1">
    <Container>
      <ul class="border-1 border-gray-200 w-full">
        <li v-for="(course, index) in courses" :key="index" class="flex">
          <div class="flex flex-1 border-r-1 border-gray-200 px-4 py-2">
            <div class="flex items-center justify-center mr-4 cursor-pointer">
              <i v-if="flag" class="i-radix-icons:checkbox" @click="toggle(false)" />
              <i v-else class="i-carbon:checkbox" @click="toggle(true)" />
            </div>
            <img class="w-24" :src="bg" alt="">
            <section class="flex flex-col ml-4">
              <div class="text-xl flex-1 pb-8">
                {{ course.title }}
              </div>
              <p class="text-sm text-gray-600">
                {{ course.teacher }} | <span>{{ course.tag }}</span>
              </p>
              <p class="text-sm text-gray-600">
                <span>{{ course.count }}</span>人购买 | 已更新：<span>{{ course.progress }}</span>
              </p>
            </section>
          </div>
          <p class="flex items-center justify-center border-r-1 border-gray-200 px-4">
            ¥<span>{{ course.price }}</span>
          </p>
          <div class="flex items-center justify-center px-4">
            <span class="text-red-500 cursor-pointer" @click="show = !show">删除</span>
          </div>
        </li>
      </ul>
    </Container>
    <div class="absolute bottom-0 left-0 w-full">
      <Container class="bg-white flex justify-between items-center w-full px-2 py-2">
        <div class="flex">
          <!-- checkbox -->
          <div class="px-2 text-xl">
            <!-- 选中 -->
            <i v-if="flag" class="i-radix-icons:checkbox" @click="() => toggle(false)" />
            <!-- 未选中 -->
            <i v-else class="i-carbon:checkbox" @click="() => toggle(true)" />
          </div>
          <span class="text-gray-400">全选</span>
        </div>
        <div class="flex items-center">
          <span class="mr-2 text-gray-400">合计：</span>
          <span class="pr-4 text-orange text-xl">￥999.00</span>
          <div class="px-8 btn">
            结算
          </div>
        </div>
      </Container>
    </div>
    <teleport to="body">
      <!-- <Modal v-model="show">
        hello world
      </Modal> -->
      <Toast v-model="show" text="删除成功" />
    </teleport>
  </div>
</template>

<style scoped lang="scss"></style>
