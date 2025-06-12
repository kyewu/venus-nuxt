<script setup lang="ts">
const emit = defineEmits(['submit'])
const show = defineModel <boolean> ({ default: false })
function onSubmit() {
  show.value = false
  emit('submit')
}
</script>

<template>
  <transition name="fade" mode="out-in">
    <div v-if="show" class="fixed flex w-full h-full z-100 top-0 left-0 bg-black bg-opacity-30 transition-all">
      <div class="w-80 m-auto bg-white border shadow-lg rounded-2 px-4 py-4">
        <slot />
        <div class="flex justify-center pt-4">
          <div class="btn mx-2" @click="show = false">
            取消
          </div>
          <div class="btn-plain mx-2" @click="onSubmit()">
            确定
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped></style>
