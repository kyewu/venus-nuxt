<script setup lang="ts">
const items = ref([
  {
    name: '普通用户',
    rights: [
      {
        name: '课程答疑',
        value: true,
      },
      {
        name: '学分兑换',
        value: true,
      },
    ],
    price: 0,
  },
  {
    name: '会员',
    rights: [
      {
        name: '课程答疑',
        value: true,
      },
      {
        name: '学分兑换',
        value: true,
      },
      {
        name: '优质专栏',
        value: true,
      },
    ],
    price: 199,
  },
  {
    name: '高级会员',
    rights: [
      {
        name: '课程答疑',
        value: true,
      },
      {
        name: '学分兑换',
        value: true,
      },
      {
        name: '优质专栏',
        value: true,
      },
      {
        name: '精品微课',
        value: '8折',
      },
    ],
    price: 499,
  },
])
</script>

<template>
  <div>
    <MemberBenefits
      :items="items"
    />
  </div>
</template>

<style scoped>

</style>
