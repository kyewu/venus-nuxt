export default defineEventHandler(() => {
  const baseApiUrl = useRuntimeConfig().public.baseApiURL
  const fetch = (url: string) => $fetch(url, {
    baseURL: baseApiUrl,
  })
  return fetch(`/api/v1/course`)
},
)
