<script setup lang="ts">
const activeIndex = ref(0)

provide('activeIndex', activeIndex)
</script>

<template>
  <div class="bg-gray-100">
    <div class="bg-white py-10 mb-4">
      <Container>
        <!-- 内容区域 -->
        <div class="flex w-full">
          <!-- 课程介绍 -->
          <div class="bg w-1/2" />
          <!-- 左图，右文档 -->
          <div class="w-1/2">
            <div class="text-3xl">
              课程名称
            </div>
            <div class="text-gray-300 mb-4 line-clamp-3">
              课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述课程描述
            </div>
            <div class="flex text-sm mb-4 text-gray-300">
              <span class="pr-2">toimcBrian</span>|
              <span class="pl-2">前端大牛</span>
            </div>
            <div class="text-orange-400 mb-8 text-2xl">
              ￥3999.00
            </div>
            <div class="flex">
              <div class="btn mr-4">
                加入购物车
              </div>
              <div class="btn-plain px-10">
                收藏
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <Container>
      <!-- 课程详情 -->
      <div class="w-full flex mb-4">
        <div class="w-[calc(75%-1rem)] bg-white mr-4">
          <!-- tabs -->
          <div class="border-b-1 border-b-color-gray-200">
            <Tabs v-model="activeIndex" :items="['课程介绍', '章节目录', '学员评价']" />
            <!-- tabs标题 -->
          </div>
          <!-- tabs content -->
          <div class="p-4">
            <!-- 左边是Markdown的详情 -->
            <NuxtPage />
          </div>
        </div>
        <!-- 右边是侧边栏 -->
        <div class="w-1/4">
          <div class="bg-white mb-2 h-120">
            边栏
          </div>
          <div class="bg-white mb-2 last:mb-0 h-120">
            边栏2
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped></style>
