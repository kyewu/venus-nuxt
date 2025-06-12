<script setup lang="ts">
import type { FooterType } from './types'
import weChatCode from 'public/assets/images/wechat.jpg'

withDefaults(defineProps<FooterType>(), {
  icp: '沪ICP备123456789号',
  copyRight: 'Copyright @ Kevin 2025-2026',
  links: () => [
    {
      name: 'Blog',
      url: 'https://github.com/venus-ui',
    },
    {
      name: 'Github',
      url: 'https://github.com/venus-ui',
    },
  ],
  contacts: () => ({
    email: 'admin@qq.com',
    phone: '+86 123456789',
    address: '浙江省杭州市西湖区',
    wechat: weChatCode,
  }),
})
</script>

<template>
  <footer class="p-4 bg-gray-700 text-white">
    <Container class="flex-col px-8">
      <section class="w-full flex flex-row justify-between items-center">
        <!-- menu -->
        <Menu class="flex-1 justify-start" />
        <aside class="flex items-center pr-10 text-lg">
          <div class="group relative">
            <div class="i-ic:baseline-wechat cursor-pointer" />
            <!-- image -->
            <img
              class="hidden w-20 h-20 absolute top-0 left-[-1/2] translate-x-[-50%] translate-y-[-100%] group-hover:block max-w-unset"
              :src="contacts.wechat || 'public/assets/images/wechat.jpg'" alt="WeChat QR Code"
            >
          </div>
          <div class="ml-4 i-bi:sina-weibo cursor-pointer" />
        </aside>
      </section>
      <div class="my-4 border-b-1 border-coolgray-600 w-full" />
      <!-- 介绍，联系信息，媒体信息，外链 -->
      <ul class="w-full flex flex-row justify-start mb-4 pl-4">
        <li v-if="contacts" class="mr-10">
          <div class="text-gray-200 font-500 text-lg pb-4 flex items-center">
            <i class="i-lineicons:phone mr-2" />
            <span>联系信息</span>
          </div>
          <div class="text-gray-200 font-300 mb-2">
            <span>邮箱:</span>
            <span>{{ contacts.email }}</span>
          </div>
          <div v-if="contacts.phone" class="text-gray-200 font-300 mb-2">
            <span>电话:</span>
            <span>{{ contacts.phone }}</span>
          </div>
          <div v-if="contacts.address" class="text-gray-200 font-300 mb-2">
            <span>地址:</span>
            <span>{{ contacts.address }}</span>
          </div>
        </li>
        <li v-if="links.length">
          <div class="text-gray-200 font-500 text-lg pb-4 flex items-center">
            <i class="i-solar:link-bold mr-2" />
            <span>友链信息</span>
          </div>
          <div
            v-for="item in links" :key="item.name"
            class="text-gray-200 font-300 mb-2 decoration-underline hover:font-500"
          >
            <a :href="item.url" target="_blank">{{ item.name }}</a>
          </div>
        </li>
      </ul>
      <!-- icp -->
      <div class="flex items-center justify-center w-full">
        {{ copyRight }}
        <div class="record" />
        <a href="https://github.com/venus-ui">{{ icp }}</a>
      </div>
    </Container>
  </footer>
</template>

<style scoped lang="scss">
.record {
  background: url('public/assets/icons/record.png') no-repeat;
  @apply w-4 h-4 mx-2;
}
</style>
