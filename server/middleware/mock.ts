import process from 'node:process'

export default defineEventHandler(async (event) => {
  // 1. 判断env
  if (process.env.NODE_ENV === 'development') {
    // 2. 判断url -> /api Y -> redirect /mock
    const url = getRequestURL(event)
    const whitelist = (process.env.WHITELIST || '')?.split(',')
    // bugfix url.pathname与
    if (
      url.pathname.includes('/api')
      && !url.pathname.includes('/api/_')
      && !whitelist.includes(url.pathname)
    ) {
      const path = url.pathname.replace('/api', '/mock')
      console.log('url-pathname: ', path)
      return await sendProxy(event, `${process.env.LOCAL_BASE_API_URL}${path}`)
    }
  }
})
