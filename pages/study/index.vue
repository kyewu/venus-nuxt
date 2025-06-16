<script setup lang="ts">
import bg from 'public/assets/images/bg.png'

const studyStore = useStudyStore()
await studyStore.getCourseList()
</script>

<template>
  <div class="pb-15">
    <div v-for="(course, index) in studyStore.lists" :key="index">
      <template v-if="course.courses.length">
        <Container>
          <div class="text-xl py-2 lg:(text-3xl pb-2 pt-6) font-bold">
            {{ course.name }}
          </div>
        </Container>
        <Container>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lt-sm:px-4 py-4">
            <a v-for="(item, index) in course.courses" :key="index" href="" target="_blank" class="flex">
              <Card class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
                    :image="`${item.coverId}`" image-type="rounded" :title="item.title" border>
                <template #default>
                  <div
                    class="px-2 py-1 lg:(px-4 mb-4) flex items-center justify-start text-gray-500 text-xs lg:text-base">
                    <span class="mr-2">{{ item.users.name }}</span>|
                    <span class="ml-2">前端课程</span>
                  </div>
                  <div
                    class="px-2 py-1 lg:(px-4 mb-4) flex items-center justify-between text-gray-500 mb-4 text-xs lg:text-base">
                    <div>
                      <span class="mr-2 text-orange">￥{{ item.price }}</span>
                      <span>{{ item.counts }}人学习</span>
                    </div>
                    <div class="i-mdi:cart lg:text-xl xl:text-3xl text-sky-400" />
                  </div>
                </template>
              </Card>
            </a>
          </div>
        </Container>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
