import type { Card, SwiperItemType } from '~/components/types'

export const useHomeStore = defineStore('home', {
  state: () => ({
    'swiperLists': [] as SwiperItemType[],
    'projects': [] as Card[],
    'courses': [] as Card[],
    'swiper-projects': [],
  }),
  actions: {
    async fetchData() {
      const res = await useFetch('/api/home')
      console.log('home data', res.data.value)
      if (res.data.value && res.data.value.data) {
        const { data } = res.data.value
        this.swiperLists = data.swipers
        this.projects = data.projects
        this.courses = data.courses
        this['swiper-projects'] = data['swiper-projects']
      }
    },
  },
})
