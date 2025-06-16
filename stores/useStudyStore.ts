import type { GetCourseResponse } from './types'

export const useStudyStore = defineStore('study', {
  state: () => ({
    lists: [] as GetCourseResponse[],
  }),
  actions: {
    async getCourseList() {
      const res = await useFetch('/api/course')
      if (res.status.value === 'success') {
        if (res.data?.value && Array.isArray(res.data.value)) {
          this.lists = res.data.value
        }
      }
      else {
        console.warn('ggg')
      }
    },
  },
})
