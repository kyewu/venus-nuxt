export default defineEventHandler(() => {
  const baseApiUrl = useRuntimeConfig().public.baseApiURL
  return $fetch(`/api/v1/home`, {
    method: 'get',
    baseURL: baseApiUrl,
  })
  // env dev: api-> mock
  // env prod: api -> 正常请求
  // return {
  //   code: 200,
  //   data: {
  //     'swipers': [],
  //     'swiper-projects': [],
  //     'projects': [],
  //     'courses': [],
  //   },
  // }
})
