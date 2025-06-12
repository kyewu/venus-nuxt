<script setup lang="ts">
const { items } = defineProps<{
  items: Array<{
    name: string
    rights: Array<{ name: string, value: boolean | string }>
    price: number
  }>
}>()

const allRights = computed(() => {
  const arr = Array.from(new Set(items.map(item => item.rights.map(right => right.name))))
  return arr.flat(Infinity) as string[]
})

function getRightIcon(rightName: string, user: any) {
  const right = user.rights.find((r: any) => r.name === rightName)
  if (right) {
    return 'i-ic:baseline-check text-green-500'
  }
  return 'i-ic:baseline-close text-red-500'
}
</script>

<template>
  <div class="p-4">
    <Container class="flex-col">
      <div class="text-center text-2xl">
        会员权益
      </div>
      <div class="w-full">
        <!-- 会员权限表格 -->
        <!-- thead: 用户不同等级 -->
        <!-- 表格内容：1列，相应权限 -->
        <table class="w-full">
          <thead class="text-xl">
            <tr>
              <th class="text-center" />
              <th v-for="(item, index) in items" :key="index" class="text-center">
                <div class="text-lg font-bold flex flex-col items-center mb-2 text-gray-700">
                  <p>{{ item.name }}</p>
                  <div class="text-sm text-bg-500 bg-gray-300 px-4 py-1 rounded-6">
                    {{ item.price > 0
                      ? `¥${item.price}/年` : '免费' }}
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(rightName, index) in allRights" :key="index" :class="index % 2 === 0 ? 'bg-sky-100' : ''">
              <td class="text-center">
                {{ rightName }}
              </td>
              <td v-for="(user, idx) in items" :key="idx" class="text-center">
                <i :class="getRightIcon(rightName, user)" class="text-2xl" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  </div>
</template>

<style scoped lang="scss">
table {
  tbody {
    tr {
      &:hover {
        @apply bg-sky-200 shadow-md
      }
    }
  }

  td {
    @apply p-2;

    &:first-child {
      @apply w-20 sm:w-30;
    }
  }
}
</style>
