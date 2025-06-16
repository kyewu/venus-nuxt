import type { Card, SwiperItemType } from '~/components/types'

interface HomeResponse {
  data: {
    'swipers': SwiperItemType[]
    'swiper-projects': SwiperItemType[]
    'projects': Card[]
    'courses': Card[]
  }
}

export const useHomeStore = defineStore('home', {
  state: () => ({
    'swiperLists': [] as SwiperItemType[],
    'projects': [] as Card[],
    'courses': [] as Card[],
    'swiper-projects': [] as SwiperItemType[],
  }),
  actions: {
    async fetchData() {
      const res = await useFetch<HomeResponse>('/api/home')
      if (res.data.value && res.data.value?.data && res.data.value.data) {
        const { data } = res.data.value
        this.swiperLists = data.swipers
        this.projects = data.projects
        this.courses = data.courses
        this['swiper-projects'] = data['swiper-projects']
      }
    },
  },
})
